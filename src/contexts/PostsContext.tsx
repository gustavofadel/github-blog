import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface PostResponse {
  id: number
  number: number
  title: string
  created_at: string
  body: string
}

type User = {
  login: string
}

interface LoadSelectedPostResponse {
  html_url: string
  title: string
  user: User
  comments: number
  created_at: string
  body: string
}

interface FetchPostsResponse {
  items: PostResponse[]
}

export interface Post {
  id: number
  number: number
  link: string
  title: string
  publishTime: string
  slug: string
  body: string
}

interface PostData {
  title: string
  link: string
  username: string
  publishTime: string
  comments: number
  body: string
}

interface PostsContextType {
  posts: Post[]
  postsCount: number
  selectedPost: PostData | null
  searchPosts: (query: string) => void
  loadSelectedPost: (slug: string) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext<PostsContextType>(
  {} as PostsContextType,
)

export function PostsProvider({ children }: PostsProviderProps) {
  const [initialPosts, setInitialPosts] = useState<Post[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null)

  const fetchPosts = useCallback(async () => {
    await api
      .get<FetchPostsResponse>(import.meta.env.VITE_POSTS_ENDPOINT)
      .then(({ data }) => {
        const parsedPosts: Post[] = data.items.map((post) => {
          const { id, number, title, body, created_at } = post

          const formattedBody = body.slice(0, 200)

          const slug = title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')

          const publishTime = formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })

          const link = `post/${slug}`

          return {
            body: formattedBody,
            id,
            link,
            number,
            publishTime,
            slug,
            title,
          }
        })

        setInitialPosts(parsedPosts)
        setPosts(parsedPosts)
      })
  }, [])

  function searchPosts(query: string) {
    if (query === '') {
      return setPosts(initialPosts)
    }

    setPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()),
      ),
    )
  }

  async function loadSelectedPost(slug: string) {
    const issueNumber = posts.find((post) => post.slug === slug)?.number

    const { data } = await api.get<LoadSelectedPostResponse>(
      `${import.meta.env.VITE_POST_ENDPOINT}/${issueNumber}`,
    )

    setSelectedPost({
      title: data.title,
      link: data.html_url,
      username: data.user.login,
      publishTime: formatDistanceToNow(new Date(data.created_at), {
        addSuffix: true,
        locale: ptBR,
      }),
      comments: data.comments,
      body: data.body,
    })
  }

  const postsCount = posts.length

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider
      value={{ posts, postsCount, selectedPost, searchPosts, loadSelectedPost }}
    >
      {children}
    </PostsContext.Provider>
  )
}
