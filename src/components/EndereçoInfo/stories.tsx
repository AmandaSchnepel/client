import { Story, Meta } from '@storybook/react'
import EndereçoInfo, { EndereçoInfoProps } from '.'

export default {
  title: 'EndereçoInfo',
  component: EndereçoInfo,
  args: {
    title: 'Rua Pará 1179 - 83040010',
    subtitle: 'Boneca do iguaçu',
    tempo: '30 - 40 min'
  }
} as Meta

export const Default: Story<EndereçoInfoProps> = (args) => (
  <EndereçoInfo {...args} />
)
