import { Apple as AppleIcon } from '@styled-icons/boxicons-logos/Apple'

import * as S from './styles'

const ButtonInstall = () => (
  <S.Wrapper>
    <S.Container>
      <AppleIcon aria-label="Apple" />
      <S.StyleButton>
        <S.Title>
          {' '}
          Baixar na <br /> <strong> App Store </strong>{' '}
        </S.Title>
      </S.StyleButton>
    </S.Container>

    <S.Container>
      <S.GoogleIcon src="/img/google-play.png" aria-label="Google" />
      <S.StyleButton>
        <S.Title>
          {' '}
          Disponível na <br /> <strong> Google Play </strong>{' '}
        </S.Title>
      </S.StyleButton>
    </S.Container>
  </S.Wrapper>
)

export default ButtonInstall
