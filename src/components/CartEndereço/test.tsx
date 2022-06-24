import { render, screen } from '@testing-library/react'

import CartEndereço from '.'

describe('<CartEndereço />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartEndereço />)

    expect(
      screen.getByRole('heading', { name: /CartEndereço/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
