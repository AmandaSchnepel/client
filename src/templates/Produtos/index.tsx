import { UserProps } from 'components/MenuUserInfo'
import { ImagesProps } from 'components/Images'
import { ProductsInfoProps } from 'components/ProductsInfo'
import { Container } from 'components/Container'

import MediaMatch from 'components/MediaMatch'
import Line from 'components/Line'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import ImagesSlider from 'components/ImagesSlider'
import ProductsInfo from 'components/ProductsInfo'
import * as S from './styles'

export type ProdutosProps = {
  menu: UserProps[]
  image: ImagesProps[]
  items: ProductsInfoProps[]
}

const Produtos = ({ image, items, menu }: ProdutosProps) => (
  <S.Wrapper>
    <Container>
      <Menu items={menu} />
    </Container>

    <Container>
      <Line />
    </Container>

    <S.Container>
      <S.div>
        <ImagesSlider items={image} aria-label="gallery" />
      </S.div>
      {items.map((item, index) => (
        <ProductsInfo key={index} {...item} />
      ))}
    </S.Container>

    <MediaMatch greaterThan="large">
      <Footer />
    </MediaMatch>
  </S.Wrapper>
)

export default Produtos
