import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductsInfo from '.'

const props = {
  title: 'Creme de leite original uht 200g',
  developer: 'Nestle',
  img: '/img/produtos/creme-de-leite.png',
  price: 'R$3,69',
  description:
    'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição'
}

describe('<ProductsInfo />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ProductsInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.description })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.price })
    ).toBeInTheDocument()
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<ProductsInfo {...props} favorite />)

    expect(screen.getByLabelText(/remove from favorite/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<ProductsInfo {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
