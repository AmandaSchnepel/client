import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ImageMock from 'components/ImagesSlider/mock'
import MenuMock from 'components/Menu/mock'
import InfoMock from 'components/ProductsInfo/mock'
import Produto, { ProdutosProps } from '.'

const props: ProdutosProps = {
  menu: MenuMock,
  image: ImageMock,
  items: InfoMock
}

jest.mock('components/ImagesSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Images" />
  }
}))
jest.mock('components/ProductsInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProductsInfo" />
  }
}))

describe('<Produtos />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Produto {...props} />)

    expect(screen.getByTestId('Mock Images')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProductsInfo')).toBeInTheDocument()
  })
})
