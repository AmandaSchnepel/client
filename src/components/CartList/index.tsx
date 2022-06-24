import ProductsItem, { ProductsItemProps } from 'components/ProductsItem'
import * as S from './styles'

export type CartListProps = {
  items: ProductsItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <ProductsItem key={item.title} {...item} />
    ))}

    <S.Footer>
      Total<S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
