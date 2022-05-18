import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerOptions from '.'

describe('<BannerOptions />', () => {
  it('should render the elements', () => {
    renderWithTheme(<BannerOptions />)

    expect(
      screen.getByRole('heading', {
        name: /Faça suas compras sem sair de casa./i
      })
    ).toBeInTheDocument()
  })
})
