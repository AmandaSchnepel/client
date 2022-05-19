import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-twotone/FavoriteBorder'
import { Favorite as FavoriteIcon } from '@styled-icons/material-sharp/Favorite'
import ButtonQuantity from 'components/ButtonQuantity'
import Button from 'components/Button'

import * as S from './styles'

export type ProductsInfoProps = {
  title: string
  developer: string
  price: string
  description: string
  favorite?: boolean
  onFav?: () => void
}

const ProductsInfo = ({
  title,
  developer,
  description,
  price,
  onFav,
  favorite = false
}: ProductsInfoProps) => (
  <S.Wrapper>
    <S.div>
      <S.Developer>{developer}</S.Developer>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <FavoriteIcon aria-label="remove from favorite" />
        ) : (
          <FavoriteBorderIcon ari-Label="Add Favorite" />
        )}
      </S.FavButton>
    </S.div>

    <S.Title>{title}</S.Title>

    <S.div2>
      <S.Price>{price}</S.Price>
      <ButtonQuantity count={1} />
    </S.div2>

    <S.div3>
      <S.Description>{description}</S.Description>
      <Button size="xlarge">Comprar</Button>
    </S.div3>
  </S.Wrapper>
)

export default ProductsInfo
