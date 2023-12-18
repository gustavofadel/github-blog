import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Helmet } from 'react-helmet'
import { Badge } from '../../components/Badge'
import { Link } from '../../components/Link'
import {
  BadgeGroup,
  LinksContainer,
  PostBody,
  PostHeader,
  PostMarkdownContent,
  PostTitle,
} from './styles'

export function Post() {
  return (
    <>
      <Helmet>
        <title>Github Blog | JavaScript data types and data structures</title>
      </Helmet>

      <PostHeader>
        <LinksContainer>
          <Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </Link>

          <Link
            href="https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/1"
            target="_blank"
          >
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </LinksContainer>

        <PostTitle>JavaScript data types and data structures</PostTitle>

        <BadgeGroup>
          <Badge
            icon={<FontAwesomeIcon icon={faGithub} />}
            text="gustavofadel"
          />

          <Badge
            icon={<FontAwesomeIcon icon={faCalendarDay} />}
            text="Há 1 dia"
          />

          <Badge
            icon={<FontAwesomeIcon icon={faComment} />}
            text="5 comentários"
          />
        </BadgeGroup>
      </PostHeader>

      <PostBody>
        <PostMarkdownContent>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types.
        </PostMarkdownContent>
      </PostBody>
    </>
  )
}
