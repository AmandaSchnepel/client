import { Story, Meta } from '@storybook/react'
import CartPayments, { CartPaymentsProps } from '.'

import mockItems from './mock'

export default {
  title: 'CartPayments',
  component: CartPayments,
  args: {
    items: mockItems
  }
} as Meta

export const Default: Story<CartPaymentsProps> = (args) => (
  <CartPayments {...args} />
)
