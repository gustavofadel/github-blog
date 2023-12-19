import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Badge } from '../../../../components/Badge'
import { Link } from '../../../../components/Link'
import { UserContext } from '../../../../contexts/UserContext'
import {
  AvatarContainer,
  AvatarImage,
  BadgeGroup,
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileInfo,
  ProfileName,
} from './styles'

export function Profile() {
  const { user } = useContext(UserContext)

  return (
    <ProfileContainer>
      <AvatarContainer>
        <AvatarImage src={user.avatar_url} />
      </AvatarContainer>

      <ProfileContent>
        <ProfileInfo>
          <Link href={user.profile_url} role="link" target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>

          <ProfileName>{user.name}</ProfileName>
        </ProfileInfo>

        <ProfileDescription>{user.bio}</ProfileDescription>

        <BadgeGroup>
          <Badge
            icon={<FontAwesomeIcon icon={faGithub} />}
            text={user.username}
          />
          <Badge
            icon={<FontAwesomeIcon icon={faBuilding} />}
            text={user.company}
          />
          <Badge
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            text={`${user.followers} seguidores`}
          />
        </BadgeGroup>
      </ProfileContent>
    </ProfileContainer>
  )
}
