import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import cardsMock from 'components/PaymentOptions/mock'
import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /Minha carteira/i })
    ).toBeInTheDocument()
  })
})