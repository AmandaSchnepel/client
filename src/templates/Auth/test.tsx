import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )
    // verifiquem se tem 1 logos
    expect(screen.getByLabelText(/Jardim/i)).toBeInTheDocument()
  })
})
