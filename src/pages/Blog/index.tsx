import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostsContainer, PostsHeader } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />

      <PostsContainer>
        <PostsHeader>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </PostsHeader>

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
