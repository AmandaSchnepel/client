import { Story, Meta } from '@storybook/react'
import Payment, { PaymentProps } from '.'

export default {
  title: 'Payment',
  component: Payment,
  args: {
    ValorInicial: 'R$16,49',
    ValorTaxa: 'R$7,50',
    ValorDesconto: 'R$0,00',
    ValorFinal: 'R$23,99'
  }
} as Meta

export const Default: Story<PaymentProps> = (args) => <Payment {...args} />
