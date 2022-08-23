import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import CartIcon from 'components/CartIcon'
import * as S from './styles'
import { ProductsItemProps } from 'components/ProductsItem'

export type CartDropdownProps = {
  items?: ProductsItemProps[]
  total?: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
