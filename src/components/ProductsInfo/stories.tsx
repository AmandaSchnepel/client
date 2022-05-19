import { Story, Meta } from '@storybook/react'
import ProductsInfo, { ProductsInfoProps } from '.'

export default {
  title: 'ProductsInfo',
  component: ProductsInfo,
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

export const Default: Story<ProductsInfoProps> = (args) => (
  <div style={{ maxWidth: '41rem' }}>
    <ProductsInfo {...args} />
  </div>
)
