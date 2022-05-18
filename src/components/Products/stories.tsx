import { Story, Meta } from '@storybook/react'
import Products, { ProductsProps } from '.'

export default {
  title: 'Products/Products',
  component: Products,
  args: {
    title: 'Creme de leite original uht 200g',
    developer: 'Nestle',
    img: '/img/produtos/creme-de-leite.png',
    price: 'R$3,69',
    description:
      'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
} as Meta

export const Default: Story<ProductsProps> = (args) => <Products {...args} />
