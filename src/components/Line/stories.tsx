import { Story, Meta } from '@storybook/react'
import Line from '.'

export default {
  title: 'Line',
  component: Line
} as Meta

export const Default: Story = (args) => <Line {...args} />
