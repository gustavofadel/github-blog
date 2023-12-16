import styled from 'styled-components'

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  svg {
    color: ${(props) => props.theme.colors['base-label']};
  }
`
