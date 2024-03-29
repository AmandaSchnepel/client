import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 300,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(4)
    expect(screen.getByText('R$ 300,00')).toHaveStyle({ color: '#212529' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 300,00" hasButton />)

    expect(screen.getByText(/Compre Agora/i)).toBeInTheDocument
  })

  it('should render empty if there are no games', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByText(/Seu carrinho está vazio/i)).toBeInTheDocument
  })
})
