import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const PostHeader = styled.header`
  padding: 2rem;
  margin: -8rem 0 2.5rem 0;
  background: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.25rem;
`

export const PostTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-title']};
`

export const BadgeGroup = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;

  div + div {
    margin-left: 1.5rem;
  }
`

export const PostBody = styled.main`
  padding: 0 2rem;
`

export const PostMarkdownContent = styled(ReactMarkdown)`
  white-space: break-spaces;
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme.colors['base-text']};

  a {
    color: ${(props) => props.theme.colors.blue};
  }
`
