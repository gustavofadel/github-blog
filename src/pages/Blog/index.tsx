import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostsContainer } from './styles'

export function Blog() {
  return (
    <>
      <Profile />

      <SearchForm />

      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </>
  )
}
