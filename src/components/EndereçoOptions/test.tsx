import { screen } from '@testing-library/react'
import endereçoMock from 'components/EndereçoInfo/mock'
import { renderWithTheme } from 'utils/tests/helpers'

import EndereçoOptions from '.'

describe('<EndereçoOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(<EndereçoOptions list={endereçoMock} />)

    expect(
      screen.getByRole('heading', { name: /Endereços cadastrados/i })
    ).toBeInTheDocument()
  })
})
