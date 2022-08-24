import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('should render the menu', () => {
  it('should render correctly', () => {
    renderWithTheme(<UserDropdown />)
    //verificando se o icon existe no documento
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })
})
