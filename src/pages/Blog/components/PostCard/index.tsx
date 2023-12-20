import { Post } from '../../../../contexts/PostsContext'
import {
  PostCardBody,
  PostCardContainer,
  PostCardHeader,
  PostCardPublishTime,
  PostCardTitle,
} from './styles'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer to={post.link}>
      <PostCardHeader>
        <PostCardTitle>{post.title}</PostCardTitle>
        <PostCardPublishTime>{post.publishTime}</PostCardPublishTime>
      </PostCardHeader>

      <PostCardBody>{post.body}</PostCardBody>
    </PostCardContainer>
  )
}
