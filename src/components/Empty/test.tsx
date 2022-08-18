import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'Seu carrinho está vazio',
  description: 'Uma simples descrição',
  image: '/img/carrinhovazio.png'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('img', { name: /carrinho vazio/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Seu carrinho está vazio/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()

    expect(screen.getByText(/uma simples descrição/i)).toBeInTheDocument()
    ;('')
  })
})
