import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'


import Products from '.'

const props = {
    title: 'Nome do Produto',
    developer: 'Marca do produto',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$30,99',
    promotionalprice: 'R$ 20,00'
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

    expect(screen.getByLabelText(/add favorite/i)).toBeInTheDocument()
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<Products {...props}  promotionalprice= 'R$20,00'/>)

    expect(screen.getByText('R$30,99')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$20,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
    it('should render a filled Favorite icon when favorite is true', () => {
      renderWithTheme(<Products {...props}  favorite/>)
  
     expect(screen.getByLabelText(/remove from favorite/i)).toBeInTheDocument()
  })
  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<Products {...props}  favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])
    
    expect(onFav).toBeCalled()

   expect(screen.getByLabelText(/remove from favorite/i)).toBeInTheDocument()
  })
})