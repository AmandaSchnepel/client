import Link from 'next/link'
import Button from 'components/Button'
import ProductsItem, { ProductsItemProps } from 'components/ProductsItem'
import * as S from './styles'

export type CartListProps = {
  items: ProductsItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    <S.ProductList>
      {items.map((item) => (
        <ProductsItem key={item.title} {...item} />
      ))}
    </S.ProductList>

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>

      {hasButton && (
        <Link href="/carrinho" passHref>
          <Button as="a">Compre Agora</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList
