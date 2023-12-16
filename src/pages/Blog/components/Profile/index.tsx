import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge } from '../../../../components/Badge'
import { Link } from '../../../../components/Link'
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
  return (
    <ProfileContainer>
      <AvatarContainer>
        <AvatarImage src="https://github.com/gustavofadel.png" />
      </AvatarContainer>

      <ProfileContent>
        <ProfileInfo>
          <Link
            href="https://github.com/gustavofadel"
            role="link"
            target="_blank"
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>

          <ProfileName>Gustavo Fadel</ProfileName>
        </ProfileInfo>

        <ProfileDescription>Uma descrição aqui</ProfileDescription>

        <BadgeGroup>
          <Badge
            icon={<FontAwesomeIcon icon={faGithub} />}
            text="gustavofadel"
          />
          <Badge
            icon={<FontAwesomeIcon icon={faBuilding} />}
            text="LUDUS Lab"
          />
          <Badge
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            text="46 seguidores"
          />
        </BadgeGroup>
      </ProfileContent>
    </ProfileContainer>
  )
}
