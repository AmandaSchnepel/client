import * as S from './styles'

const BannerWork = () => (
  <S.Wrapper>
    <S.Image src="/img/trabalhe-conosco.png" aria-label="cadastre-se" />

    <S.Container>
      <S.Title>
        Trabalhe <strong>conosco!</strong>
      </S.Title>
      <S.Developer>
        {' '}
        Entre em contato e envie seu <br /> currículo
      </S.Developer>
      <S.Button> Entrar em contato </S.Button>
    </S.Container>
  </S.Wrapper>
)

export default BannerWork
