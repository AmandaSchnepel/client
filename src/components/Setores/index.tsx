import * as S from './styles'

export type SetoresProps = {
  img: string
  title: string
}

const Setores = ({ img, title }: SetoresProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
  </S.Wrapper>
)
export default Setores
