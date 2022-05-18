import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductsSliderRegular from '.'

const items = [
  {
    title: 'Creme de leite original uht 200g',
    developer: 'Nestle',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 3,69',
    description:
      'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição'
  },
  {
    title: 'Bolacha recheada chocolate 126g',
    developer: 'Bono',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 2,49',
    description:
      'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição'
  },
  {
    title: 'Refresco em pó abacaxi 20g',
    developer: 'Mid',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 0,89',
    description:
      'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição'
  },
  {
    title: 'Batata palha extra fina 205g',
    developer: 'Elma chips',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 9,99',
    description:
      'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição'
  },
  {
    title: 'Esponja multiuso limpeza pesada 4un',
    developer: 'Limpano',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 5,99',
    description:
      'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição'
  },
  {
    title: 'Achocolatado em pó branco 300g',
    developer: 'Toddy',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 'R$ 7,99',
    description:
      'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição'
  }
]
describe('<ProductsSliderRegular />', () => {
  it('should render with 6 active items', () => {
    const { container } = renderWithTheme(
      <ProductsSliderRegular items={items} />
    )
    expect(container.querySelectorAll('.slick-active')).toHaveLength(6)
  })
})
