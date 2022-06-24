import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import EndereçoInfo from '.'

const props = {
  title: 'Rua Pará 1179 - 83040010',
  subtitle: 'Boneca do iguaçu',
  tempo: '30 - 40 min'
}

describe('<EndereçoInfo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<EndereçoInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.subtitle })
    ).toBeInTheDocument()

    expect(screen.getByText('30 - 40 min')).toBeInTheDocument()
  })
})
