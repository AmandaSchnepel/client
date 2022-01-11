import { Story, Meta } from '@storybook/react'
import MenuMobile from '.'

export default {
  title: 'MenuMobile',
  component: MenuMobile
} as Meta

export const Default: Story = (args) => <MenuMobile {...args} />
