import { Story, Meta } from '@storybook/react'
import UserDropdown from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown />
  </div>
)
