import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartPayments from '.'
import mockItems from './mock'

describe('<CartPayments />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartPayments items={mockItems} />)
    expect(screen.getAllByRole('heading')).toHaveLength(2)
  })
})
