import { Story, Meta } from '@storybook/react'
import ImagesInfo from '.'

export default {
  title: 'ImagesInfo',
  component: ImagesInfo
} as Meta

export const Default: Story = (args) => <ImagesInfo {...args} />
