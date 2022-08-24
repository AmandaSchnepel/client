import Dropdown from 'components/Dropdown'
import Link from 'next/dist/client/link'
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'
import * as S from './styles'

const UserDropdown = () => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/pefil/me" passHref>
        <S.Link>
          <AccountCircle aria-label="Open Menu" />
          <span>Minha Conta</span>
        </S.Link>
      </Link>
    </S.Nav>

    <S.Nav>
      <Link href="/logout" passHref>
        <S.Link title="Sign Out">
          <ExitToApp />
          <span>Sair</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
