import * as Label from '@radix-ui/react-label'
import {
  PostCountText,
  SearchBar,
  SearchFormContainer,
  SearchFormHeader,
} from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <Label.Root className="label-container" htmlFor="search">
          Publicações
        </Label.Root>

        <PostCountText>6 publicações</PostCountText>
      </SearchFormHeader>

      <SearchBar placeholder="Buscar conteúdo" type="text" id="search" />
    </SearchFormContainer>
  )
}
