import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Images from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  title: 'Image'
}

describe('<Images />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Images {...props} />)
    expect(screen.getByRole('img', { name: /Image/i })).toBeInTheDocument()
  })
})
