import { Story, Meta } from '@storybook/react'
import { BannerProps } from 'components/Banner'
import BannerSlider from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items }
} as Meta

export const Default: Story<BannerProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider items={args} {...args} />
  </div>
)
