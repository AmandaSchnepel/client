import { render, screen } from '@testing-library/react'

import Categories from '.'

describe('<Categories />', () => {
  it('should render the heading', () => {
    const { container } = render(<Categories />)

    expect(screen.getByRole('heading', { name: /Categorias/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
