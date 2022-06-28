import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Payment from '.'

const props = {
  ValorInicial: 'R$16,49',
  ValorTaxa: 'R$7,50',
  ValorDesconto: 'R$0,00',
  ValorFinal: 'R$23,99'
}

describe('<Payment />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Payment {...props} />)

    expect(screen.getByLabelText(/Payments/i)).toBeInTheDocument()
  })
})
