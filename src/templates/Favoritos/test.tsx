import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductsMock from 'components/ProductsSliderRegular/mock'
import MenuMock from 'components/Menu/mock'
import Favoritos from '.'

const props = {
  menu: MenuMock,
  products: ProductsMock,
  productsSlider1Regular: ProductsMock
}

describe('<Favoritos />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Favoritos {...props} />)

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()
  })
})
