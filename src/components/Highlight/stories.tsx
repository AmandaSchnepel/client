import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    image: '/img/BANNERSITE1.png'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
