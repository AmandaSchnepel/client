import { Story, Meta } from '@storybook/react'
import endereçoMock from 'components/EndereçoInfo/mock'
import EndereçoOptions, { EndereçoListProps } from '.'

export default {
  title: 'EndereçoOptions',
  component: EndereçoOptions,
  args: {
    list: endereçoMock
  }
} as Meta

export const Default: Story<EndereçoListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <EndereçoOptions {...args} />
  </div>
)
