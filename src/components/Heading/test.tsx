import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black2 heading by default', () => {
    renderWithTheme(<Heading>Jardim</Heading>)
    expect(screen.getByRole('heading', { name: /Jardim/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a white1 heading when color is passed', () => {
    renderWithTheme(<Heading color="white1">Jardim</Heading>)
    expect(screen.getByRole('heading', { name: /Jardim/i })).toHaveStyle({
      color: '#FFFFFF'
    })
  })
})
