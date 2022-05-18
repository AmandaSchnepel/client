import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Cadastrar/i })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByRole('link', { name: /Entrar/i })).toBeInTheDocument()
    expect(
      screen.getByText(/Faça login com suas redes sociais/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/Já tem uma conta\?/i)).toBeInTheDocument()
  })
})
