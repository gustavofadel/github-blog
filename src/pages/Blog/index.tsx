import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { PostsContext } from '../../contexts/PostsContext'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostsContainer } from './styles'

export function Blog() {
  const { posts } = useContext(PostsContext)

  return (
    <>
      <Helmet>
        <title>GitHub Blog</title>
      </Helmet>

      <Profile />

      <SearchForm />

      <PostsContainer>
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />
        })}
      </PostsContainer>
    </>
  )
}
