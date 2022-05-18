import { Story, Meta } from '@storybook/react'
import MenuUserInfo, { UserProps } from '.'

export default {
  title: 'Menu/MenuUserInfo',
  component: MenuUserInfo,
  args: {
    img: 'https://images.unsplash.com/photo-1609357603884-0eeac1033cb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'name user',
    link: '/user/logout'
  }
} as Meta

export const Default: Story<UserProps> = (args) => <MenuUserInfo {...args} />
