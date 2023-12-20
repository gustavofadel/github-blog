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
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext<PostsContextType>(
  {} as PostsContextType,
)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async () => {
    await api
      .get<FetchPostsResponse>(import.meta.env.VITE_POSTS_ENDPOINT)
      .then(({ data }) => {
        setPosts(
          data.items.map((post) => {
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
          }),
        )
      })
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}
