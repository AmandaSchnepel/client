import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 29,99'
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div>
    <CartList {...args} />
  </div>
)
