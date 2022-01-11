import { Story, Meta } from '@storybook/react'
import { ProductsProps } from 'components/Products'

import ProductsSliderRegular from '.'

const items = [
  {
    title: 'Creme de leite original uht 200g',
    developer: 'Nestle',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 3,69'
  },
  {
    title: 'Bolacha recheada chocolate 126g',
    developer: 'Bono',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 2,49'
  },
  {
    title: 'Refresco em pó abacaxi 20g',
    developer: 'Mid',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 0,89'
  },
  {
    title: 'Batata palha extra fina 205g',
    developer: 'Elma chips',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 9,99'
  },
  {
    title: 'Esponja multiuso limpeza pesada 4un',
    developer: 'Limpano',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 5,99'
  },
  {
    title: 'Achocolatado em pó branco 300g',
    developer: 'Toddy',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 'R$ 7,99'
  }
]

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
