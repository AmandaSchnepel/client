import { Story, Meta } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from '.'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    number: '2233',
    flag: '**** **** ****',
    img: '/img/cartão-visa.png'
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <PaymentOptions {...args} />
)
