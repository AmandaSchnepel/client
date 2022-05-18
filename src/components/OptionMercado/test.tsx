import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OptionMercado from '.'

describe('<OptionMercado />', () => {
  it('should render the elements', () => {
    renderWithTheme(<OptionMercado />)

    expect(
      screen.getByRole('heading', { name: /Mercado/i })
    ).toBeInTheDocument()
  })
})
