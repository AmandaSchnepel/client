import { Story, Meta } from '@storybook/react'
import ProductsInfo, { ProductsInfoProps } from '.'
import items from './mock'

export default {
  title: 'ProductsInfo',
  component: ProductsInfo,
  args: { items },
  argTypes: {
    onFav: { action: 'clicked' }
  }
} as Meta

export const Default: Story<ProductsInfoProps> = (args) => (
  <div>
    <ProductsInfo {...args} />
  </div>
)
