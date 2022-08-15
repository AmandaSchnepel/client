import { UserProps } from 'components/MenuUserInfo'
import { Container } from 'components/Container'

import MediaMatch from 'components/MediaMatch'
import Products, { ProductsProps } from 'components/Products'
import Heading from 'components/Heading'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Line from 'components/Line'
import Empty from 'components/Empty'

import * as S from './styles'
import MenuMobile from 'components/MenuMobile'

export type FavoritosTemplateProps = {
  menu: UserProps[]
  products?: ProductsProps[]
}

const Favoritos = ({ menu, products = [] }: FavoritosTemplateProps) => (
  <S.Wrapper>
    <MediaMatch greaterThan="medium">
      <Container>
        <Menu items={menu} />
      </Container>
      <Container>
        <Line />
      </Container>
    </MediaMatch>

    <MediaMatch greaterThan="medium">
      <Container>
        <S.Title>
          <Heading color="black2"> Favoritos </Heading>
        </S.Title>
        {products?.length >= 1 ? (
          <S.Container>
            {products?.map((product, index) => (
              <Products size="medium" key={index} {...product} />
            ))}
          </S.Container>
        ) : (
          <Empty
            title="Seu favoritos está vazio"
            description="Adicione produtos nos seus favoritos"
            hasLink
          />
        )}
      </Container>
    </MediaMatch>

    <S.Center>
      <MediaMatch lessThan="small">
        <Container>
          <S.Title2>
            <Heading color="black2"> Favoritos </Heading>
          </S.Title2>

          <S.Linha aria-label="linha"></S.Linha>

          {products?.length >= 1 ? (
            <S.Container2>
              {products?.map((product, index) => (
                <Products size="medium" key={index} {...product} />
              ))}
            </S.Container2>
          ) : (
            <Empty
              title="Seu favoritos está vazio"
              description="Adicione produtos nos seus favoritos"
              hasLink
            />
          )}
        </Container>

        <MenuMobile />
      </MediaMatch>
    </S.Center>

    <MediaMatch greaterThan="large">
      <Footer />
    </MediaMatch>
  </S.Wrapper>
)

export default Favoritos
