import { Story, Meta } from '@storybook/react'
import { ProductsProps } from 'components/Products'

import ProductsSliderRegular from '.'
import items from './mock'

export default {
  title: 'ProductsSliderRegular',
  component: ProductsSliderRegular,
  args: { items }
} as Meta

export const Default: Story<ProductsProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ProductsSliderRegular items={args} {...args} />
  </div>
)
