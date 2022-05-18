import * as S from './styles'

const BannerBusiness = () => (
  <S.Wrapper>
    <S.Container>
      <S.Title>
        Amplie seus <strong> negócios!</strong>
      </S.Title>
      <S.Developer>
        {' '}
        Cadastre-se e tenha seus produtos <br /> em nossa plataforma{' '}
      </S.Developer>
      <S.Button> Cadastre-se agora </S.Button>
    </S.Container>

    <S.Image src="/img/Amplie-seus-negocios.png" aria-label="cadastre-se" />
  </S.Wrapper>
)

export default BannerBusiness
