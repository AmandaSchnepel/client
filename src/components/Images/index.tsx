import * as S from './styles'

export type ImagesProps = {
  img: string
  title: string
}

const Images = ({ img, title }: ImagesProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
  </S.Wrapper>
)

export default Images
