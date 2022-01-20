import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ImagesInfo from '.'

describe('<ImagesInfo />', () => {
  it('should render the Images and headings', () => {
    renderWithTheme(<ImagesInfo />)

    expect(screen.getByLabelText(/compras/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/entrega/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pontos/i)).toBeInTheDocument()
  })
})
