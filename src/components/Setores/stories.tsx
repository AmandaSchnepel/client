import { Story, Meta } from '@storybook/react'
import Setores, { SetoresProps } from '.'

export default {
  title: 'Setores',
  component: Setores,
  args: {
    img: '/img/mercado1.png',
    title: 'Image'
  }
} as Meta

export const Default: Story<SetoresProps> = (args) => <Setores {...args} />
