import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-twotone/FavoriteBorder'
import { Favorite as FavoriteIcon } from '@styled-icons/material-sharp/Favorite'
import * as S from './styles'

export type ProductsProps = {
  title: string
  developer: string
  img: string
  price: string
  favorite?: boolean
  size?: 'regular' | 'medium'
  onFav?: () => void
}

const Products = ({
  title,
  developer,
  img,
  price,
  favorite = false,
  size = 'regular',
  onFav
}: ProductsProps) => (
  <S.Wrapper size={size}>
    <S.Container>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <FavoriteIcon aria-label="remove from favorite" />
        ) : (
          <FavoriteBorderIcon ari-Label="Add Favorite" />
        )}
      </S.FavButton>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Info>
        <S.Developer>{developer}</S.Developer>
        <S.Title>{title}</S.Title>
      </S.Info>
    </S.Container>
    <S.BuyBox>
      <S.Price>{price}</S.Price>
    </S.BuyBox>
  </S.Wrapper>
)

export default Products
