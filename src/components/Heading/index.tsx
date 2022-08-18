import * as S from './styles'

export type LineColors = 'green' | 'black2'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'black2' | 'white1'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
}

const Heading = ({
  children,
  color = 'black2',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'green'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
