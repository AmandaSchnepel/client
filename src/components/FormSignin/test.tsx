import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignin from '.'

describe('<FormSignin />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignin />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignin />)

    expect(
      screen.getByRole('link', { name: /Esqueceu a senha\?/i })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignin />)

    expect(
      screen.getByRole('link', { name: /Cadastre-se/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Faça login com suas redes sociais/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/Ainda não tem uma conta\?/i)).toBeInTheDocument()
  })
})
