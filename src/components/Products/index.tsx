import { FavoriteBorder as FavoriteIconBorder } from '@styled-icons/material-twotone/FavoriteBorder'
import { Favorite as FavoriteIcon } from '@styled-icons/material/Favorite'
import * as S from './styles'


export type ProductsProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalprice?: string
  favorite?:boolean
  size?: 'small' | 'medium' | 'large'
  onFav?: () => void
}

const Products = (
  { title, developer, img, price, promotionalprice, favorite=false, size='medium', onFav }
  : ProductsProps) => (
    
  <S.Wrapper size={size}>
    <S.Content>
    <S.FavButton onClick={onFav} role="button">
    { favorite ? ( <FavoriteIcon aria-label=" remove from favorite"/>
    ) : (
    <FavoriteIconBorder aria-label="Add Favorite"/>
    )}
    </S.FavButton>
    <S.ImageBox>
      <img src={img} alt={title}/>
    </S.ImageBox>
      <S.Info>
      <S.Developer>{developer}</S.Developer>
      <S.Title>{title}</S.Title>
      </S.Info>
      <S.BuyBox>

      {!!promotionalprice && (
      <S.Price isPromotional >{price}</S.Price>
      )}
      <S.Price>{promotionalprice || price}</S.Price>

      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default Products
