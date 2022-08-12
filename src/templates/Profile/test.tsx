import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import MenuMock from 'components/Menu/mock'

import Profile, { ProfileTemplateProps } from '.'

const props: ProfileTemplateProps = {
  menu: MenuMock
}

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/perfil/me' }))
}))

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>
  }
}))
jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />
  }
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile {...props}>Lorem Ipsum</Profile>)

    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
