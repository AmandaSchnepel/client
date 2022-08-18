import * as S from './styles'

export type HighlightProps = {
  image: string
}

const Highlight = ({ image }: HighlightProps) => (
  <S.Wrapper>
    <S.Image src={image} aria-label="banner" />
  </S.Wrapper>
)

export default Highlight
