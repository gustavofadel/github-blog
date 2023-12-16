import * as Avatar from '@radix-ui/react-avatar'
import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 13rem;
  padding: 2rem 2.5rem;
  margin-top: -8rem;
  background: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
`

export const AvatarContainer = styled(Avatar.Root)`
  flex: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  max-width: 9.25rem;
  width: 9.25rem;
  height: 9.25rem;
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`

export const ProfileContent = styled.div`
  flex: 2;
  margin-left: 2.125rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`

export const ProfileName = styled.span`
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: bold;
  color: ${(props) => props.theme.colors['base-title']};
`

export const ProfileDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 160%;
  font-weight: 400;
  color: ${(props) => props.theme.colors['base-text']};
`

export const BadgeGroup = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;

  div + div {
    margin-left: 1.5rem;
  }
`
