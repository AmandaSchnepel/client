import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ButtonInstall from '.'

describe('<ButtonInstall />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ButtonInstall />)

    expect(
      screen.getByRole('heading', { name: /Baixar na App Store/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Disponível na Google Play/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/apple/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/google/i)).toBeInTheDocument()
  })
})
