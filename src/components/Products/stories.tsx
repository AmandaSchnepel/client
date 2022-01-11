import { Story, Meta } from '@storybook/react'
import Products, { ProductsProps } from '.'

export default {
  title: 'Products',
  component: Products,
  args: {
    title: 'Creme de leite original uht 200g',
    developer: 'Nestle',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$3,69'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
} as Meta

export const Default: Story<ProductsProps> = (args) => (
  <div style={{ width: '20.7rem' }}>
    <Products {...args} />
  </div>
)
