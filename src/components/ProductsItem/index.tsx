import ButtonQuantity from 'components/ButtonQuantity'
import * as S from './styles'

export type ProductsItemProps = {
  img: string
  title: string
  price: string
}

const ProductsItem = ({ img, title, price }: ProductsItemProps) => (
  <S.Wrapper>
    <S.Container>
      <S.Image>
        <img src={img} alt={title} />
      </S.Image>

      <S.Group1>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Group1>

      <S.Group2>
        <ButtonQuantity count={1} size="small" />
      </S.Group2>
    </S.Container>
  </S.Wrapper>
)

export default ProductsItem
