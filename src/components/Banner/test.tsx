import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...props} />)
    //verificando se a imagem existe
    expect(screen.getByRole('img', { name: /banner/i })).toBeInTheDocument()
  })
})
