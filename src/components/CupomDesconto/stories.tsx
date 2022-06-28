import { Story, Meta } from '@storybook/react'
import CupomDesconto, { CupomDescontoProps } from '.'

export default {
  title: 'CupomDesconto',
  component: CupomDesconto,
  args: {
    label: '',
    labelFor: 'Cupom',
    id: 'Cupom',
    initialValue: '',
    placeholder: 'Adicione um cupom'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<CupomDescontoProps> = (args) => (
  <div style={{ maxWidth: 350, padding: 15 }}>
    <CupomDesconto {...args} />
  </div>
)
export const withError: Story<CupomDescontoProps> = (args) => (
  <div style={{ maxWidth: 350, padding: 15 }}>
    <CupomDesconto {...args} />
  </div>
)

withError.args = {
  error: 'Desculpe, este cupom é inválido.'
}
