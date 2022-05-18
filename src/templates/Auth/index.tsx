import Logo from 'components/Logo'

import * as S from './styles'

type AuthProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
}

const Auth = ({ title, children, subtitle }: AuthProps) => (
  <S.Wrapper>
    <S.Content>
      <Logo size="large" color="green" aria-label="Jardim" />

      <S.Spacing>
        <S.Title>
          {title} <br /> <strong>{subtitle}</strong>
        </S.Title>
      </S.Spacing>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
