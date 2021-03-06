import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartEndereço from '.'
import mockItems from './mock'

describe('<CartEndereço />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartEndereço items={mockItems} />)

    expect(screen.getAllByRole('heading')).toHaveLength(4)
  })
})
