import { UserProps } from 'components/MenuUserInfo'
import { BannerProps } from 'components/Banner'
import { ProductsProps } from 'components/Products'
import { CategoriesProps } from 'components/Categories'
import { Container } from 'components/Container'

import Line from 'components/Line'
import ProductsSliderRegular from 'components/ProductsSliderRegular'
import BannerSlider from 'components/BannerSlider'
import CategoriesSlider from 'components/CategoriesSlider'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from './styles'

export type MercadoTemplateProps = {
  menu: UserProps[]
  categories: CategoriesProps[]
  banners: BannerProps[]
  productsSlider1Regular: ProductsProps[]
  productsSlider2Regular: ProductsProps[]
}

const Mercado = ({
  menu,
  categories,
  banners,
  productsSlider1Regular,
  productsSlider2Regular
}: MercadoTemplateProps) => (
  <S.Wrapper>
    <section>
      <Container>
        <Menu items={menu} />
      </Container>

      <Container>
        <Line />
      </Container>

      <Container>
        <S.SectionSpacings>
          <S.Categories>
            <Heading color="black2"> Categorias </Heading>
          </S.Categories>
          <CategoriesSlider items={categories} />
        </S.SectionSpacings>
      </Container>

      <Container>
        <S.SectionSpacings>
          <S.Title>
            <Heading color="black2"> Ofertas </Heading>
          </S.Title>
          <BannerSlider items={banners} />
        </S.SectionSpacings>
      </Container>

      <Container>
        <S.SectionSpacings>
          <S.Title>
            <Heading color="black2"> Mais vendidos </Heading>
          </S.Title>
          <ProductsSliderRegular items={productsSlider1Regular} />
        </S.SectionSpacings>
      </Container>

      <Container>
        <S.SectionSpacings>
          <S.Title>
            <Heading color="black2"> Mais procurados </Heading>
          </S.Title>
          <ProductsSliderRegular items={productsSlider2Regular} />
        </S.SectionSpacings>
      </Container>
    </section>
  </S.Wrapper>
)

export default Mercado
