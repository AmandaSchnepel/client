import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import OptionFarmacia from '.'

describe('<OptionFarmacia />', () => {
  it('should render the heading', () => {
    renderWithTheme(<OptionFarmacia />)

    expect(
      screen.getByRole('heading', { name: /Farmácia/i })
    ).toBeInTheDocument()
  })
})
