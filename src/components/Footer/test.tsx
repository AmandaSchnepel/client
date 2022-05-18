import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('img', { name: /Supermercado Jardim/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Nossas Lojas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /R. Harry Feeken, 1361 - Afonso Pena, São José dos Pinhais - PR, 83040-000/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /R. Santa Rita, 1101 - Cidade Jardim, São José dos Pinhais - PR, 83035-250/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Fale conosco/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /equipe@supermercadojardim.com.br/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/linha/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/WhatsApp/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Linkedin/i)).toBeInTheDocument()
  })
})
