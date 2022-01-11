import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerSlider from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  }
]

describe('<ProductsSliderRegular />', () => {
  it('should render with 6 active items', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(3)
  })
})
