import { Story, Meta } from '@storybook/react'
import { ImagesProps } from 'components/Images'
import ImagesSlider from '.'
import items from './mock'

export default {
  title: 'ImagesSlider',
  component: ImagesSlider,
  args: { items }
} as Meta

export const Default: Story<ImagesProps[]> = (args) => (
  <div style={{ maxWidth: '30rem', height: '30rem' }}>
    <ImagesSlider items={args} {...args} />
  </div>
)
