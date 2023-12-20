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

interface PostsContextType {
  posts: Post[]
  postsCount: number
  searchPosts: (query: string) => void
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

  const fetchPosts = useCallback(async () => {
    await api
      .get<FetchPostsResponse>(import.meta.env.VITE_POSTS_ENDPOINT)
      .then(({ data }) => {
        const parsedPosts: Post[] = data.items.map((post) => {
          const { id, number, title, body, created_at } = post

          const formattedBody = body.slice(0, 200)

          const slug = title.toLowerCase().replace(/ /g, '-')

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

  const postsCount = posts.length

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, searchPosts, postsCount }}>
      {children}
    </PostsContext.Provider>
  )
}
