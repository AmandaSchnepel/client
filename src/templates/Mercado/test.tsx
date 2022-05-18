import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerMock from 'components/BannerSlider/mock'
import CategoriesMock from 'components/CategoriesSlider/mock'
import MenuMock from 'components/Menu/mock'
import ProductsMock from 'components/ProductsSliderRegular/mock'

import Mercado from '.'

const props = {
  menu: MenuMock,
  categories: CategoriesMock,
  banners: BannerMock,
  productsSlider1Regular: ProductsMock,
  productsSlider2Regular: ProductsMock
}

describe('<Mercado />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Mercado {...props} />)

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Mercado {...props} />)

    expect(
      screen.getByRole('heading', { name: /categorias/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /ofertas/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /mais vendidos/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /mais procurados/i })
    ).toBeInTheDocument()
  })
})
