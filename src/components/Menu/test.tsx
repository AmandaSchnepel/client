import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import MenuUserInfo from 'components/MenuUserInfo'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu items={[]} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Supermercado Jardim/i })
    ).toBeInTheDocument()
  })

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu items={[]} />)
    //selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu tá escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
  it('should show register box when logged out', () => {
    renderWithTheme(<Menu items={[]} />)

    expect(screen.getByText(/Cadastrar/i)).toBeInTheDocument()
  })

  it('should show wishlight and accont when logged in', () => {
    renderWithTheme(<Menu items={[]} username="will" />)

    expect(screen.getByText(/Endereços/i)).toBeInTheDocument()
    expect(screen.getByText(/Meios de pagamento/i)).toBeInTheDocument()
    expect(screen.getByText(/Meus pedidos/i)).toBeInTheDocument()
    expect(screen.getByText(/Alterar senha/i)).toBeInTheDocument()
    expect(screen.getByText(/Políticas de privacidade/i)).toBeInTheDocument()
    expect(screen.getByText(/Nossas Lojas/i)).toBeInTheDocument()
  })

  const props = {
    img: 'https://unsplash.com/photos/6unx_9DIbe4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    title: 'name user',
    link: '/user/logout'
  }

  describe('<MenuUserInfo />', () => {
    it('should render correctly', () => {
      renderWithTheme(<MenuUserInfo {...props} />)
      //verificar se o title existe renderizado
      expect(
        screen.getByRole('heading', { name: /name user/i })
      ).toBeInTheDocument()

      //verifique se a imagem existe renderizado
      expect(
        screen.getByRole('img', { name: /name user/i })
      ).toBeInTheDocument()
    })
  })
})
