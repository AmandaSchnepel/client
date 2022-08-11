import ProductsItem, { ProductsItemProps } from 'components/ProductsItem'
import * as S from './styles'

export type CartListProps = {
  items: ProductsItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    <S.ProductList>
      {items.map((item) => (
        <ProductsItem key={item.title} {...item} />
      ))}
    </S.ProductList>

    <S.Footer>
      <S.Title>Total</S.Title>
      <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
