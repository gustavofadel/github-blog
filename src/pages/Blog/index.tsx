import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostsContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />

      <PostsContainer>
        <SearchForm />

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </BlogContainer>
  )
}
