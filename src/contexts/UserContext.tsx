import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface GetUserResponse {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface User {
  username: string
  avatar_url: string
  profile_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface UserContextType {
  user: User
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const getUser = useCallback(async () => {
    await api
      .get<GetUserResponse>(import.meta.env.VITE_USER_ENDPOINT)
      .then(({ data }) => {
        setUser({
          avatar_url: data.avatar_url,
          bio: data.bio,
          company: data.company,
          followers: data.followers,
          name: data.name,
          profile_url: data.html_url,
          username: data.login,
        })
      })
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
