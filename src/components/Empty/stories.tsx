import { Story, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  title: 'Seu carrinho está vazio',
  description: 'Adicione produtos em seu carrinho',
  image: '/img/carrinhovazio.png'
}
