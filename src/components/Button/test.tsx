import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      width: '28rem',
      'font-size': '1.6rem'
    })
  })
  it('should render the xxsmall size', () => {
    renderWithTheme(<Button size="xxsmall">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '2.7rem',
      width: '14rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the xsmall size', () => {
    renderWithTheme(<Button size="xsmall">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3.6rem',
      width: '16rem',
      'font-size': '1.6rem'
    })
  })
  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      width: '25rem',
      'font-size': '1.6rem'
    })
  })
  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      width: '32rem',
      'font-size': '1.6rem'
    })
  })
})
