import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CupomDesconto from '.'

describe('<CupomDesconto />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CupomDesconto label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })
})
