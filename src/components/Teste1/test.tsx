import { render, screen } from '@testing-library/react'

import Teste1 from '.'

describe('<Teste1 />', () => {
  it('should render the heading', () => {
    const { container } = render(<Teste1 />)

    expect(screen.getByRole('heading', { name: /Teste1/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
