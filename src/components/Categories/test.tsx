import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Categories from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  title: 'categoria'
}

describe('<Categories />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Categories {...props} />)
    //verificando se o titulo foi renderizado
    expect(
      screen.getByRole('heading', { name: /categoria/i })
    ).toBeInTheDocument()
    //verificando se a imagem existe renderizado
    expect(screen.getByRole('img', { name: /categoria/i })).toBeInTheDocument()
  })
})
