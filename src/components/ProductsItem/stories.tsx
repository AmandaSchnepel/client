import { Story, Meta } from '@storybook/react'
import ProductsItem, { ProductsItemProps } from '.'

export default {
  title: 'ProductsItem',
  component: ProductsItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Creme de Leite Nestle 200ml',
    price: 'R$ 3,29'
  }
} as Meta

export const Default: Story<ProductsItemProps> = (args) => (
  <ProductsItem {...args} />
)
