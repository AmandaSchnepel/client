import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import ButtonQuantity from '.'

describe('<ButtonQuantity />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ButtonQuantity count={1} />)

    expect(screen.getByLabelText(/diminuir/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/aumentar/i)).toBeInTheDocument()
  })
})
