import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import ButtonLink from '.'

it('should render an icon version', () => {
  renderWithTheme(
    <ButtonLink icon={<ArrowRight data-testid="icon" />}>Buy now</ButtonLink>
  )

  expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  expect(screen.getByTestId('icon')).toBeInTheDocument()
})
