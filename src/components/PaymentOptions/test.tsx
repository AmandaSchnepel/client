import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

const props = {
  number: '2233',
  flag: '**** **** ****',
  img: '/img/cartão-visa.png'
}

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PaymentOptions {...props} />)

    expect(screen.getByRole('img', { name: props.number })).toHaveAttribute(
      'src',
      props.img
    )
  })
})
