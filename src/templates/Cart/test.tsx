import MenuMock from 'components/Menu/mock'
import listMock from 'components/CartList/mock'
import EndereçoMock from 'components/CartEndereço/mock'
import paymentMock from 'components/CartPayments/mock'
import paymentOptionMock from 'components/Payment/mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Cart, { CartProps } from '.'

const props: CartProps = {
  menu: MenuMock,
  list: listMock,
  endereço: EndereçoMock,
  payment: paymentMock,
  items: paymentOptionMock
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/CartEndereço', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Endereço" />
  }
}))

jest.mock('components/CartPayments', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Payments" />
  }
}))

jest.mock('components/Payment', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Payment" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Cart {...props} />)

    expect(screen.getByTestId('Mock Endereço')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Payments')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Payment')).toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />)
  })
})
