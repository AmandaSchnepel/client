import { UserProps } from 'components/MenuUserInfo'
import { Container } from 'components/Container'
import { ProductsItemProps } from 'components/ProductsItem'
import { EndereçoInfoProps } from 'components/EndereçoInfo'
import { PaymentOptionsProps } from 'components/PaymentOptions'
import { PaymentProps } from 'components/Payment'

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

export type CartProps = {
  menu: UserProps[]
  list: ProductsItemProps[]
  endereço: EndereçoInfoProps[]
  payment: PaymentOptionsProps[]
  items: PaymentProps[]
}

const Cart = ({ menu, list, endereço, payment, items }: CartProps) => (
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
    </MediaMatch>

    <MediaMatch lessThan="small">
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
    </MediaMatch>

    <MediaMatch greaterThan="medium">
      <Container>
        <Heading>Compre Também</Heading>
      </Container>
    </MediaMatch>

    <MediaMatch greaterThan="large">
      <Footer />
    </MediaMatch>
  </S.Wrapper>
)

export default Cart
