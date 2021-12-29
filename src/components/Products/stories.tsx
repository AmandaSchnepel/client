import { Story, Meta } from '@storybook/react'
import Products, { ProductsProps } from '.'

export default {
  title: 'Products',
  component: Products,

  args:{
    title: 'Nome do Produto',
    developer: 'Marca do produto',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$30,99',
    promotionalprice: 'R$ 20,00'
  },

  argTypes:{
    onFav: {action: 'clicked' }
  }
} as Meta

export const Default: Story<ProductsProps> = (args) =>( 
 <div style={{ width: '13rem', height:'18rem' }}>
   <Products {...args} /> 
   </div>
   )
