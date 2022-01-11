import { Story, Meta } from '@storybook/react'
import { CategoriesProps } from 'components/Categories'
import CategoriesSlider from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'categoria'
  }
]
export default {
  title: 'CategoriesSlider',
  component: CategoriesSlider,
  args: { items }
} as Meta

export const Default: Story<CategoriesProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CategoriesSlider items={args} {...args} />
  </div>
)
