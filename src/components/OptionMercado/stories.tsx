import { Story, Meta } from '@storybook/react'
import OptionMercado from '.'

export default {
  title: 'Home/OptionMercado',
  component: OptionMercado
} as Meta

export const Default: Story = (args) => <OptionMercado {...args} />
