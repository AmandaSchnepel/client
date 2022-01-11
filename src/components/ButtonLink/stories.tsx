import { Story, Meta } from '@storybook/react'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import ButtonLink from '.'

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <ButtonLink {...args} />

Default.args = {
  children: 'Buy Now',
  icon: <ArrowRight />
}
