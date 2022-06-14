import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import SetoresSlider from '.'

const items = [
  {
    img: '/img/mercado.png',
    title: 'categoria'
  },
  {
    img: '/img/shopping1.png',
    title: 'categoria'
  },
  {
    img: '/img/farmacia1.png',
    title: 'categoria'
  }
]

describe('<SetoresSlider />', () => {
  it('should render with 3 active items', () => {
    const { container } = renderWithTheme(<SetoresSlider items={items} />)
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
  })
})
