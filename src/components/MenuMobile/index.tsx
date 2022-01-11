import { Home as HomeIcon } from '@styled-icons/heroicons-solid/Home'
import { DocumentBulletList as ListIcon } from '@styled-icons/fluentui-system-filled/DocumentBulletList'
import { SearchAlt2 as SearchIcon } from '@styled-icons/boxicons-regular/SearchAlt2'
import { ShoppingCart as CartIcon } from '@styled-icons/heroicons-outline/ShoppingCart'

import * as S from './styles'

const MenuMobile = () => (
  <S.Wrapper>
    <S.Background>
      <S.IconWrapper>
        <HomeIcon aria-label="Open Home" />
      </S.IconWrapper>
      <S.IconWrapper>
        <SearchIcon aria-label="Open Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <ListIcon aria-label="Open List" />
      </S.IconWrapper>
      <S.IconWrapper>
        <CartIcon aria-label="Open Cart" />
      </S.IconWrapper>
    </S.Background>
  </S.Wrapper>
)

export default MenuMobile
