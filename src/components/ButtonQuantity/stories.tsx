import { Story, Meta } from '@storybook/react'
import ButtonQuantity, { ButtonQualityProps } from '.'

export default {
  title: 'ButtonQuantity',
  component: ButtonQuantity
} as Meta

export const Default: Story<ButtonQualityProps> = (args) => (
  <ButtonQuantity {...args} />
)
