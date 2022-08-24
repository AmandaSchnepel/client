import Link from 'next/link'
import Button from 'components/Button'
import ProductsItem, { ProductsItemProps } from 'components/ProductsItem'
import * as S from './styles'
import Empty from 'components/Empty'

export type CartListProps = {
  items?: ProductsItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
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
      </>
    ) : (
      <Empty
        title="Seu carrinho está vazio"
        description="Volte para a loja e aproveite nossos produtos e ofertas!"
        image="/img/carrinhovazio.png"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CartList
