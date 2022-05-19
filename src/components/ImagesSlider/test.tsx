import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import ImagesSlider from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  }
]

describe('<ImagesSlider />', () => {
  it('should render with 3 active items', () => {
    const { container } = renderWithTheme(<ImagesSlider items={items} />)
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
  })
})
