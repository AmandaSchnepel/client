import { Story, Meta } from '@storybook/react'
import Categorias, { CategoriesProps } from '.'

export default {
  title: 'Categorias',
  component: Categorias,
  args: {
    img:'https://source.unsplash.com/user/willianjusten/300x140',
    title:'categoria'
  }
} as Meta

export const Default: Story<CategoriesProps> = (args) =>( 
<div style={{ width: '13rem', height:'18rem' }}>
<Categorias {...args}/>
</div>
)
