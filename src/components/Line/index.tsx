import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

const Line = () => (
  <S.Wrapper>
    <MediaMatch greaterThan="medium">
      <div aria-label="linha"></div>
    </MediaMatch>
  </S.Wrapper>
)

export default Line
