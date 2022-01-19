import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Line from '.'

describe('<Line />', () => {
  it('should render the line', () => {
    renderWithTheme(<Line />)

    expect(screen.getByLabelText(/linha/i)).toBeInTheDocument()
  })
})
