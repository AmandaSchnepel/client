import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerBusiness from '.'

describe('<BannerBusiness />', () => {
  it('should render the heading', () => {
    renderWithTheme(<BannerBusiness />)

    expect(
      screen.getByRole('heading', { name: /Amplie seus negócios!/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Cadastre-se e tenha seus produtos em nossa plataforma/i
      })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/cadastre-se/i)).toBeInTheDocument()
  })
})
