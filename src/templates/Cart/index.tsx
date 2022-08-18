import { UserProps } from 'components/MenuUserInfo'
import { Container } from 'components/Container'
import { ProductsItemProps } from 'components/ProductsItem'
import { EndereçoInfoProps } from 'components/EndereçoInfo'
import { PaymentOptionsProps } from 'components/PaymentOptions'
import { PaymentProps } from 'components/Payment'
import ProductsSlider1Regular from 'components/ProductsSliderRegular'

import Highlight from 'components/Highlight'

import MediaMatch from 'components/MediaMatch'
import Line from 'components/Line'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import * as S from './styles'
import Heading from 'components/Heading'
import CartList from 'components/CartList'
import CartEndereço from 'components/CartEndereço'
import CartPayments from 'components/CartPayments'
import CupomDesconto from 'components/CupomDesconto'
import Payment from 'components/Payment'
import Button from 'components/Button'
import Empty from 'components/Empty'
import { ProductsProps } from 'components/Products'

export type CartProps = {
  menu: UserProps[]
  list: ProductsItemProps[]
  endereço: EndereçoInfoProps[]
  payment: PaymentOptionsProps[]
  items: PaymentProps[]
  productsSlider1Regular: ProductsProps[]
}

const Cart = ({
  menu,
  list,
  endereço,
  payment,
  items,
  productsSlider1Regular
}: CartProps) => (
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
          <Heading>Carrinho</Heading>
        </S.Title>
      </Container>
    </MediaMatch>

    <MediaMatch greaterThan="medium">
      {items.length ? (
        <Container>
          <S.Container>
            <S.Container2>
              <CartList items={list} total="25,99" />
            </S.Container2>
            <S.Content>
              <CartEndereço items={endereço} />
              <CartPayments items={payment} />
              <CupomDesconto placeholder="Adicione um cupom" />
              <S.Container1>
                {items.map((item, index) => (
                  <Payment key={index} {...item} />
                ))}
              </S.Container1>
            </S.Content>
          </S.Container>
        </Container>
      ) : (
        <Empty
          title="Seu carrinho está vazio"
          description="Volte para a loja e explore nossos produtos"
          hasLink
          image="/img/carrinhovazio.png"
        />
      )}
    </MediaMatch>

    <MediaMatch lessThan="small">
      {items.length ? (
        <Container>
          <S.Title2>
            <Heading>Carrinho</Heading>
          </S.Title2>

          <S.Linha aria-label="linha"></S.Linha>

          <CartList items={list} total="25,99" />
          <S.Div>
            <Button size="medium">Continuar</Button>
          </S.Div>
        </Container>
      ) : (
        <Empty
          title="Seu carrinho está vazio"
          description="Volte para a loja e explore nossos produtos"
          hasLink
          image="/img/carrinhovazio.png"
        />
      )}
    </MediaMatch>

    <MediaMatch greaterThan="medium">
      <Container>
        <S.div>
          <Heading>Compre Também</Heading>
          <ProductsSlider1Regular items={productsSlider1Regular} />
        </S.div>
        <Highlight image="/img/BANNERSITE1.jpg" />
      </Container>
    </MediaMatch>

    <MediaMatch greaterThan="large">
      <Footer />
    </MediaMatch>
  </S.Wrapper>
)

export default Cart
