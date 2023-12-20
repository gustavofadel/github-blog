import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Badge } from '../../components/Badge'
import { Link } from '../../components/Link'
import { PostsContext } from '../../contexts/PostsContext'
import {
  BadgeGroup,
  LinksContainer,
  PostBody,
  PostHeader,
  PostMarkdownContent,
  PostTitle,
} from './styles'

export function Post() {
  const { slug } = useParams<{ slug: string }>()
  const { selectedPost, loadSelectedPost } = useContext(PostsContext)

  if (!slug) {
    return <></>
  }

  loadSelectedPost(slug)

  const commentsText =
    selectedPost?.comments === 1 ? 'comentário' : 'comentários'

  return (
    <>
      <Helmet>
        <title>Github Blog | {selectedPost?.title || ''}</title>
      </Helmet>

      <PostHeader>
        <LinksContainer>
          <Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </Link>

          <Link href={selectedPost?.link || '/'} target="_blank">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </LinksContainer>

        <PostTitle>{selectedPost?.title}</PostTitle>

        <BadgeGroup>
          <Badge
            icon={<FontAwesomeIcon icon={faGithub} />}
            text={selectedPost?.username || 'Não informado'}
          />

          <Badge
            icon={<FontAwesomeIcon icon={faCalendarDay} />}
            text={selectedPost?.publishTime || 'Não informado'}
          />

          <Badge
            icon={<FontAwesomeIcon icon={faComment} />}
            text={`${selectedPost?.comments} ${commentsText}`}
          />
        </BadgeGroup>
      </PostHeader>

      <PostBody>
        <PostMarkdownContent
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ ...props }) => (
              <img alt="" style={{ maxWidth: '100%' }} {...props} />
            ),
          }}
        >
          {selectedPost?.body || 'Carregando...'}
        </PostMarkdownContent>
      </PostBody>
    </>
  )
}
