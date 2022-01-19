import { Story, Meta } from '@storybook/react'
import Menu, { MenuUserProps } from '.'
import items from './mock'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    items
  }
} as Meta

export const Default: Story<MenuUserProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen'
}
