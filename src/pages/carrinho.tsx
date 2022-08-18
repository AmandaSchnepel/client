import Cart, { CartProps } from 'templates/Cart'
import MenuMock from 'components/Menu/mock'
import listMock from 'components/CartList/mock'
import EndereçoMock from 'components/CartEndereço/mock'
import paymentMock from 'components/CartPayments/mock'
import InfoMock from 'components/Payment/mock'
import ProductsMock from 'components/ProductsSliderRegular/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      menu: MenuMock,
      list: listMock,
      endereço: EndereçoMock,
      payment: paymentMock,
      items: InfoMock,
      productsSlider1Regular: ProductsMock
    }
  }
}
