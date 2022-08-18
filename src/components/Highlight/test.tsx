import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  image: '/img/BANNERSITE1.jpg'
}

describe('<Highlight />', () => {
  it('should render background image', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('img', { name: /banner/i })).toBeInTheDocument()
  })
})
