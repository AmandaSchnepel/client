import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerInstall from '.'

describe('<BannerInstall />', () => {
  it('should render the heading and image', () => {
    renderWithTheme(<BannerInstall />)

    expect(screen.getByLabelText(/divulga/i)).toBeInTheDocument()
  })
})
