import ButtonInstall from 'components/ButtonInstall'
import * as S from './styles'

const BannerInstall = () => (
  <S.Wrapper>
    <S.Background>
      <S.Image src="/img/divulga.png" aria-label="divulga" />
      <S.Group>
        <S.Title>
          Baixe o app Jardim. <br />{' '}
          <strong> Tudo o que você procura em um só app.</strong>
        </S.Title>
        <ButtonInstall />
      </S.Group>
    </S.Background>
  </S.Wrapper>
)

export default BannerInstall
