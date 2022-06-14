import { UserProps } from 'components/MenuUserInfo'
import { Container } from 'components/Container'

import MediaMatch from 'components/MediaMatch'
import Line from 'components/Line'
import BannerWork from 'components/BannerWork'
import BannerBusiness from 'components/BannerBusiness'
import BannerInstall from 'components/BannerInstall'
import BannerOptions from 'components/BannerOptions'
import Footer from 'components/Footer'
import ImagesInfo from 'components/ImagesInfo'
import Menu from 'components/Menu'
import * as S from './styles'
import SetoresSlider from 'components/SetoresSlider'
import { SetoresProps } from 'components/Setores'

export type HomeTemplateProps = {
  menu: UserProps[]
  setores: SetoresProps[]
}

const Home = ({ menu, setores }: HomeTemplateProps) => (
  <S.Wrapper>
    <MediaMatch lessThan="large">
      <Container>
        <S.Title>
          Faça suas <strong>compras</strong>
          <br /> sem sair de <strong>casa</strong>.{' '}
        </S.Title>
        <SetoresSlider items={setores} />
      </Container>
    </MediaMatch>

    <MediaMatch greaterThan="large">
      <Container>
        <Menu items={menu} />
      </Container>

      <Container>
        <Line />
      </Container>

      <Container>
        <BannerOptions />
      </Container>

      <Container>
        <S.SectionSpacings>
          <ImagesInfo />
        </S.SectionSpacings>
      </Container>

      <S.SectionSpacings>
        <BannerInstall />
      </S.SectionSpacings>

      <Container>
        <S.SectionSpacings>
          <BannerBusiness />
        </S.SectionSpacings>
      </Container>

      <Container>
        <S.SectionSpacings>
          <BannerWork />
        </S.SectionSpacings>
      </Container>

      <Footer />
    </MediaMatch>
  </S.Wrapper>
)

export default Home
