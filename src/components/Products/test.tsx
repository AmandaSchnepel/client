import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Products from '.'

const props = {
  title: 'Creme de leite original uht 200g',
  developer: 'Nestle',
  img: '/img/produtos/creme-de-leite.png',
  price: 'R$3,69'
}

describe('<Products />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Products {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<Products {...props} favorite />)

    expect(screen.getByLabelText(/remove from favorite/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<Products {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
