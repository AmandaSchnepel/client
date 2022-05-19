import { Story, Meta } from '@storybook/react'
import Images, { ImagesProps } from '.'

export default {
  title: 'Images',
  component: Images,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'Image'
  }
} as Meta

export const Default: Story<ImagesProps> = (args) => <Images {...args} />
