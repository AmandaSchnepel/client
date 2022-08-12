import { useRouter } from 'next/router'
import { Container } from 'components/Container'
import { UserProps } from 'components/MenuUserInfo'

import MediaMatch from 'components/MediaMatch'
import Menu from 'components/Menu'
import Line from 'components/Line'
import Footer from 'components/Footer'
import ProfileMenu from 'components/ProfileMenu'

import * as S from './styles'

export type ProfileTemplateProps = {
  children?: React.ReactNode
  menu: UserProps[]
}

const Profile = ({ children, menu }: ProfileTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <S.Wrapper>
      <Container>
        <Menu items={menu} />
        <Line />

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>

      <MediaMatch greaterThan="large">
        <Footer />
      </MediaMatch>
    </S.Wrapper>
  )
}
export default Profile
