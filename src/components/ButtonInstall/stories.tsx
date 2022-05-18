import { Story, Meta } from '@storybook/react'
import ButtonInstall from '.'

export default {
  title: 'Home/ButtonInstall',
  component: ButtonInstall
} as Meta

export const Default: Story = (args) => <ButtonInstall {...args} />
