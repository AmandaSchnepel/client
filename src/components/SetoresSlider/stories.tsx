import { Story, Meta } from '@storybook/react'
import { SetoresProps } from 'components/Setores'
import items from './mock'
import SetoresSlider from '.'

export default {
  title: 'SetoresSlider',
  component: SetoresSlider,
  args: { items }
} as Meta

export const Default: Story<SetoresProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <SetoresSlider items={args} {...args} />
  </div>
)
