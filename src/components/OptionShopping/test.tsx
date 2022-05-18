import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OptionShopping from '.'

describe('<OptionShopping />', () => {
  it('should render the heading', () => {
    renderWithTheme(<OptionShopping />)

    expect(
      screen.getByRole('heading', { name: /Shopping/i })
    ).toBeInTheDocument()
  })
})
