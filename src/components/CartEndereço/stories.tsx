import { Story, Meta } from '@storybook/react'
import CartEndereço, { CartEndereçoProps } from '.'

import mockItems from './mock'

export default {
  title: 'CartEndereço',
  component: CartEndereço,
  args: {
    items: mockItems
  }
} as Meta

export const Default: Story<CartEndereçoProps> = (args) => (
  <CartEndereço {...args} />
)
