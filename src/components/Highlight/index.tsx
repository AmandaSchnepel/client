import * as S from './styles'

export type HighlightProps = {
  backgroundImage: string
}

const Highlight = ({ backgroundImage }: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} aria-label="banner"></S.Wrapper>
)

export default Highlight
