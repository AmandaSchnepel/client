import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import MenuUserInfo from '.'

const props = {
    img:'https://unsplash.com/photos/6unx_9DIbe4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    title:'name user',
    link:'/user/logout'
}

describe('<MenuUserInfo />', () => {
  it('should render correctly', () => {
    renderWithTheme(<MenuUserInfo {...props} />)
    //verificar se o title existe renderizado
    expect(screen.getByRole('heading', {name: /name user/i})).toBeInTheDocument()
    
    //verifique se a imagem existe renderizado
    expect(screen.getByRole('img', {name: /name user/i})).toBeInTheDocument()
  })
})
