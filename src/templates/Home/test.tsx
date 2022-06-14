import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import MenuMock from 'components/Menu/mock'
import SetorMock from 'components/SetoresSlider/mock'

import Home from '.'

const props = {
  menu: MenuMock,
  setores: SetorMock
}

jest.mock('components/SetoresSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Setores" />
  }
}))

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Setores')).toBeInTheDocument()
    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()
  })
})
