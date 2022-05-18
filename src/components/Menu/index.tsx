import { useState } from 'react'
// icon abrir menu
import { Menu as MenuIcon } from '@styled-icons/heroicons-outline/Menu'
//icon favoritos
import { FavoriteBorder as FavoriteIcon } from '@styled-icons/material-twotone/FavoriteBorder'
//icon pesquisa
import { SearchAlt2 as SearchIcon } from '@styled-icons/boxicons-regular/SearchAlt2'
//ICON CARRINHO
import { ShoppingCart as CartIcon } from '@styled-icons/heroicons-outline/ShoppingCart'
//ICON PERFIL
import { UserCircle as UserIcon } from '@styled-icons/boxicons-regular/UserCircle'
// icon flecha
import { ArrowIosDownwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
// icon Lacalização
import { PinOutline as PinIcon } from '@styled-icons/evaicons-outline/PinOutline'
// ICON FECHAR MENU
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
//ICON endereço
import { MapMarkedAlt as AddressIcon } from '@styled-icons/fa-solid/MapMarkedAlt'
//ICON MEIOS DE PAGAMENTO
import { Payments as PaymentIcon } from '@styled-icons/material-outlined/Payments'
// ICON MEUS PEDIDOS
import { ShoppingBags as RequestIcon } from '@styled-icons/boxicons-solid/ShoppingBags'
// icon alterar senha
import { LockPassword as PasswordIcon } from '@styled-icons/remix-fill/LockPassword'
// ICON POLITICAS DE PRIVACIDADE
import { ShieldKeyhole as PrivacyIcon } from '@styled-icons/fluentui-system-filled/ShieldKeyhole'
// ICON DE NOSSAS LOJAS
import { Storefront as StoreIcon } from '@styled-icons/material/Storefront'

import MediaMatch from 'components/MediaMatch'
import MenuUserInfo, { UserProps } from 'components/MenuUserInfo'
import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

export type MenuUserProps = {
  username?: string
  items: UserProps[]
}

const Menu = ({ items, username }: MenuUserProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      {!!username && (
        <>
          <S.MenuGroup>
            <MediaMatch lessThan="large">
              <S.IconWrapper onClick={() => setIsOpen(true)}>
                <MenuIcon aria-label="Open Menu" />
              </S.IconWrapper>
            </MediaMatch>

            <S.LinksGroup>
              <S.GroupLogo>
                <Logo size="large" />
              </S.GroupLogo>

              <MediaMatch greaterThan="large">
                <S.GroupSpacings1>
                  <S.ImageMenu src="/img/supermercado.png" />
                  <S.LinksMenu href="#">Mercado</S.LinksMenu>
                  <S.IconMenuStyled>
                    <ArrowIcon aria-label="open Options" />
                  </S.IconMenuStyled>
                </S.GroupSpacings1>
              </MediaMatch>

              <MediaMatch greaterThan="large">
                <S.GroupSpacings2>
                  <S.IconMenuSpacing>
                    <PinIcon aria-label="Pin Location" />
                  </S.IconMenuSpacing>
                  <S.LinksMenu href="#">Rua pará 1179</S.LinksMenu>
                  <S.IconMenuStyled>
                    <ArrowIcon aria-label="open Location" />
                  </S.IconMenuStyled>
                </S.GroupSpacings2>
              </MediaMatch>
            </S.LinksGroup>
            <S.IconsGroupMenu>
              <MediaMatch greaterThan="large">
                <S.IconWrapper>
                  <SearchIcon aria-label="Open Search" />
                </S.IconWrapper>
              </MediaMatch>

              <S.IconWrapper>
                <FavoriteIcon aria-label="Open Favorites" />
              </S.IconWrapper>

              <MediaMatch greaterThan="large">
                <S.IconWrapper>
                  <CartIcon aria-label="Open Cart" />
                </S.IconWrapper>
              </MediaMatch>

              <MediaMatch greaterThan="large">
                <S.IconWrapper>
                  <UserIcon aria-label="Open User" />
                </S.IconWrapper>
              </MediaMatch>
            </S.IconsGroupMenu>
          </S.MenuGroup>
        </>
      )}
      {!username && (
        <S.MenuLogout>
          <MediaMatch lessThan="large">
            <S.IconWrapper onClick={() => setIsOpen(true)}>
              <MenuIcon aria-label="Open Menu" />
            </S.IconWrapper>
          </MediaMatch>

          <S.GroupLogo>
            <Logo size="large" />
          </S.GroupLogo>

          <MediaMatch greaterThan="large">
            <S.ButtonLogin>
              <S.Cadastrar href="http://localhost:3000/sign-up">
                Criar conta
              </S.Cadastrar>
              <S.Entrar href="http://localhost:3000/sign-in">Entrar</S.Entrar>
            </S.ButtonLogin>
          </MediaMatch>
        </S.MenuLogout>
      )}
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        {!!username && (
          <>
            <S.GroupUserInfo>
              {items.map((item) => (
                <MenuUserInfo key={item.title} {...item} />
              ))}
            </S.GroupUserInfo>
            <S.MenuNav>
              <S.MenuConfigGroup>
                <AddressIcon aria-label="Endereços" />
                <PaymentIcon aria-label="Meios de pagamento" />
                <RequestIcon aria-label="Pedidos" />
                <PasswordIcon aria-label="Alterar Senha" />
                <PrivacyIcon aria-label="Políticas de privacidade" />
                <StoreIcon aria-label="Nossas lojas" />
              </S.MenuConfigGroup>
              <S.MenuConfigGroup>
                <S.MenuLink href="#">Endereços</S.MenuLink>
                <S.MenuLink href="#">Meios de pagamento</S.MenuLink>
                <S.MenuLink href="#">Meus pedidos</S.MenuLink>
                <S.MenuLink href="#">Alterar senha</S.MenuLink>
                <S.MenuLink href="#">Políticas de privacidade</S.MenuLink>
                <S.MenuLink href="#">Nossas Lojas</S.MenuLink>
              </S.MenuConfigGroup>
            </S.MenuNav>
          </>
        )}
        {!username && (
          <S.RegisterBox>
            <Button size="small">Entrar</Button>
            <span>ou</span>
            <S.CreateAccount href="#" title="Cadastrar">
              {' '}
              Cadastrar{' '}
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
