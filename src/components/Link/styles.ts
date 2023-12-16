import styled from 'styled-components'

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.blue};
  font-size: 0.75rem;
  text-decoration: none;

  svg {
    margin: 0 0.5rem;
    color: ${(props) => props.theme.colors.blue};
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  }
`
