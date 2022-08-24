import MediaMatch from 'components/MediaMatch'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Line from 'components/Line'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Products, { ProductsProps } from 'components/Products'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { Container } from 'components/Container'
import { UserProps } from 'components/MenuUserInfo'
import * as S from './styles'

export type ProdutosTemplateProps = {
  menu: UserProps[]
  products?: ProductsProps[]
  filterItems: ItemProps[]
}

const ProdutosTemplate = ({
  menu,
  filterItems,
  products = []
}: ProdutosTemplateProps) => {
  const handleShowMore = () => {
    return
  }
  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <Container>
          <Menu items={menu} />
        </Container>
        <Container>
          <Line />
        </Container>
      </MediaMatch>

      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={() => console.log('filter')}
        />

        <MediaMatch greaterThan="large">
          <Grid>
            {products?.map((product, index) => (
              <Products size="medium" key={index} {...product} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Ver mais</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </MediaMatch>
      </S.Main>

      <S.Center>
        <MediaMatch lessThan="small">
          <Container>
            {products?.length >= 1 ? (
              <S.Container2>
                {products?.map((product, index) => (
                  <Products size="medium" key={index} {...product} />
                ))}
              </S.Container2>
            ) : (
              <Empty
                title="Produto não encontrado"
                description="Não foi possível encontrar este item"
                hasLink
                image="/img/carrinhovazio.png"
              />
            )}
          </Container>
        </MediaMatch>
      </S.Center>

      <MediaMatch greaterThan="large">
        <Footer />
      </MediaMatch>
    </S.Wrapper>
  )
}
export default ProdutosTemplate
