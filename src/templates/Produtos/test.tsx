import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductsMock from 'components/ProductsSliderRegular/mock'
import MenuMock from 'components/Menu/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'
import Produtos from '.'

const props = {
  menu: MenuMock,
  products: ProductsMock,
  filterItems: filterItemsMock
}

describe('<Produtos />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Produtos {...props} />)

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()
  })
})
