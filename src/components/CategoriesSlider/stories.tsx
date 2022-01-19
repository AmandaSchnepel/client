import { Story, Meta } from '@storybook/react'
import { CategoriesProps } from 'components/Categories'
import CategoriesSlider from '.'
import items from './mock'

export default {
  title: 'CategoriesSlider',
  component: CategoriesSlider,
  args: { items }
} as Meta

export const Default: Story<CategoriesProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CategoriesSlider items={args} {...args} />
  </div>
)
