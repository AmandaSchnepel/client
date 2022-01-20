import * as S from './styles'

const ImagesInfo = () => (
  <S.Wrapper>
    <S.Spacings>
      <S.Image src="/img/compras.png" aria-label="compras" />
      <S.Title>
        Compre seus <br /> produtos <strong>favoritos</strong> <br /> de onde
        estiver.
      </S.Title>
    </S.Spacings>

    <S.Spacings>
      <S.Image src="/img/entrega.png" aria-label="entrega" />
      <S.Title>
        Entrega <strong>garantida</strong> <br /> com rapidez e <br />{' '}
        <strong>eficiência</strong>.
      </S.Title>
    </S.Spacings>

    <S.Spacings>
      <S.Image src="/img/pontos.png" aria-label="pontos" />
      <S.Title>
        Acumule <strong>pontos</strong> <br />e troque por <br />{' '}
        <strong>descontos</strong>.
      </S.Title>
    </S.Spacings>
  </S.Wrapper>
)

export default ImagesInfo
