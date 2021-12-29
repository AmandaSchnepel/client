import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'black2' | 'white1'
}

const Heading = ({ children, color = 'black2' }: HeadingProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Heading
