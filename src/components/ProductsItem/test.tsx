import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductsItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Creme de Leite Nestle 200ml',
  price: 'R$ 3,29'
}

describe('<ProductsItem />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProductsItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText('R$ 3,29')).toBeInTheDocument()
  })
})
