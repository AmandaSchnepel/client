import theme from 'styles/theme'
import { render } from '@testing-library/react'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>Supermercado Jardim</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 8rem;
        padding-right: 8rem;
      }

      <div
        class="c0"
      >
        <span>
          Supermercado Jardim
        </span>
      </div>
    `)
  })
})
