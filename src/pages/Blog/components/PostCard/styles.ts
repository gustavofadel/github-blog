import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background: ${(props) => props.theme.colors['base-post']};
  width: 25.9375rem;
  height: 16.25rem;
  border: 2px solid transparent;
  border-radius: 10px;
  text-decoration: none;
  padding: 2rem;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors['base-label']};
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const PostCardTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 160%;
  width: 75%;
  color: ${(props) => props.theme.colors['base-title']};
  text-align: start;
`

export const PostCardPublishTime = styled.span`
  font-size: 0.875rem;
  line-height: 160%;
  margin-top: 0.25rem;
  color: ${(props) => props.theme.colors['base-span']};
`

export const PostCardBody = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  margin-top: 1.25rem;
  text-align: left;
  color: ${(props) => props.theme.colors['base-text']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
