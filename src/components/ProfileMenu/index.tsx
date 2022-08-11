//ICON endereço
import { MapMarkedAlt as AddressIcon } from '@styled-icons/fa-solid/MapMarkedAlt'
//ICON MEIOS DE PAGAMENTO
import { Payments as PaymentIcon } from '@styled-icons/material-outlined/Payments'
// ICON MEUS PEDIDOS
import { ShoppingBags as RequestIcon } from '@styled-icons/boxicons-solid/ShoppingBags'
// icon alterar senha
import { LockPassword as PasswordIcon } from '@styled-icons/remix-fill/LockPassword'
// ICON DE NOSSAS LOJAS
import { Storefront as StoreIcon } from '@styled-icons/material/Storefront'
//icon minha conta
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'

import Link from 'next/link'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?:
    | '/profile/me'
    | '/profile/endereços'
    | '/profile/pagamentos'
    | '/profile/pedidos'
    | '/profile/senha'
    | '/profile/lojas'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="Meu perfil">
        <AccountCircle size={24} />
        <span>Meu perfil</span>
      </S.Link>
    </Link>

    <Link href="/profile/endereços" passHref>
      <S.Link isActive={activeLink === '/profile/endereços'} title="Endereços">
        <AddressIcon size={24} />
        <span>Endereços</span>
      </S.Link>
    </Link>

    <Link href="/profile/pagamentos" passHref>
      <S.Link
        isActive={activeLink === '/profile/pagamentos'}
        title="Meios de pagamentos"
      >
        <PaymentIcon size={24} />
        <span>Meios de pagamento</span>
      </S.Link>
    </Link>

    <Link href="/profile/pedidos" passHref>
      <S.Link isActive={activeLink === '/profile/pedidos'} title="Pedidos">
        <RequestIcon size={24} />
        <span>Pedidos</span>
      </S.Link>
    </Link>

    <Link href="/profile/senha" passHref>
      <S.Link isActive={activeLink === '/profile/senha'} title="Alterar Senha">
        <PasswordIcon size={24} />
        <span>Alterar Senha</span>
      </S.Link>
    </Link>

    <Link href="/profile/lojas" passHref>
      <S.Link isActive={activeLink === '/profile/lojas'} title="Nossas Lojas">
        <StoreIcon size={24} />
        <span>Nossas Lojas</span>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
