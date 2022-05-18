import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerWork from '.'

describe('<BannerWork />', () => {
  it('should render the heading', () => {
    renderWithTheme(<BannerWork />)

    expect(screen.getByLabelText(/cadastre-se/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Trabalhe conosco!/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Entre em contato e envie seu currículo/i
      })
    ).toBeInTheDocument()
  })
})
