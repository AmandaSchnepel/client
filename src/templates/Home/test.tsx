import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import MenuMock from 'components/Menu/mock'

import Home from '.'

const props = {
  menu: MenuMock
}

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()
  })
})
