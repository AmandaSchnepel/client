import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerSlider from '.'

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
  },
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
  },
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
  },
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
  },
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

describe('<ProductsSliderRegular />', () => {
  it('should render with 13 active items', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(13)
  })
})
