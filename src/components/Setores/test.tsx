import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Setores from '.'

const props = {
  img: '/img/mercado1.png',
  title: 'Image'
}

describe('<Setores />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Setores {...props} />)

    expect(screen.getByRole('img', { name: /Image/i })).toBeInTheDocument()
  })
})
