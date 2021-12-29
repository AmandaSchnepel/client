import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a green label by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Supermercado Jardim/i).parentElement
    ).toHaveStyle({
      color: '#207824'
    })
  })
  it('should render a white1 label when color is passed', () => {
    renderWithTheme(<Logo color="white1" />)
    expect(
      screen.getByLabelText(/Supermercado Jardim/i).parentElement
    ).toHaveStyle({
      color: '#FFFFFF'
    })
  })
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Supermercado Jardim/i).parentElement
    ).toHaveStyle({
      width: '10rem'
    })
  })
  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(/Supermercado Jardim/i).parentElement
    ).toHaveStyle({
      width: '20rem'
    })
  })
})
