import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
