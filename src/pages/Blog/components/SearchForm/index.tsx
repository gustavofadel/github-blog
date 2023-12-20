import * as Label from '@radix-ui/react-label'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import {
  PostCountText,
  SearchBar,
  SearchFormContainer,
  SearchFormHeader,
} from './styles'

export function SearchForm() {
  const { postsCount, searchPosts } = useContext(PostsContext)
  const postsText = postsCount === 1 ? 'publicação' : 'publicações'

  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <Label.Root className="label-container" htmlFor="search">
          Publicações
        </Label.Root>

        <PostCountText>
          {postsCount} {postsText}
        </PostCountText>
      </SearchFormHeader>

      <SearchBar
        placeholder="Buscar conteúdo"
        type="text"
        id="search"
        onChange={(event) => searchPosts(event.target.value)}
      />
    </SearchFormContainer>
  )
}
