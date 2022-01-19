import { Story, Meta } from '@storybook/react'
import { BannerProps } from 'components/Banner'
import BannerSlider from '.'
import items from './mock'

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
