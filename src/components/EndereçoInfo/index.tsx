import { Time as TimeIcon } from '@styled-icons/boxicons-regular/Time'
import * as S from './styles'

export type EndereçoInfoProps = {
  title: string
  subtitle: string
  tempo: string
}

const EndereçoInfo = ({ title, subtitle, tempo }: EndereçoInfoProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
    <S.Content>
      <TimeIcon />
      <S.Tempo>{tempo}</S.Tempo>
    </S.Content>
  </S.Wrapper>
)

export default EndereçoInfo
