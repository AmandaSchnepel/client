import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /Meu perfil/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Enderecos/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Meios de pagamento/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Pedidos/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Alterar Senha/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Nossas Lojas/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign out/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/perfil/enderecos" />)

    expect(screen.getByRole('link', { name: /Enderecos/i })).toHaveStyle({
      background: theme.colors.green,
      color: theme.colors.white1
    })
  })
})
