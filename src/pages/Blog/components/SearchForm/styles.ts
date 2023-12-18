import styled from 'styled-components'

export const SearchFormContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 4.5rem 0 3rem 0;
  width: 100%;
`

export const SearchFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .label-container {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 160%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const PostCountText = styled.span`
  font-size: 0.875rem;
  line-height: 160%;
  color: ${(props) => props.theme.colors['base-span']};
`

export const SearchBar = styled.input`
  height: 3.125rem;
  width: 100%;
  margin-top: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors['base-border']};
  background: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['base-text']};
`
