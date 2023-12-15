import coverImg from '../../assets/cover.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer aria-hidden="true">
      <img src={coverImg} alt="" />
    </HeaderContainer>
  )
}
