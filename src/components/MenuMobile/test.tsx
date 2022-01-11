import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import MenuMobile from '.'

describe('<MenuMobile />', () => {
  it('should render the menu', () => {
    renderWithTheme(<MenuMobile />)

    expect(screen.getByLabelText(/open Home/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open Search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open List/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open Cart/i)).toBeInTheDocument()
  })
})
