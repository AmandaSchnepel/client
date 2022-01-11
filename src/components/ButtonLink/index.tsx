import * as S from './styles'

export type ButtonLinkProps = {
  children?: React.ReactNode
  icon?: JSX.Element
}

const ButtonLink = ({ children, icon }: ButtonLinkProps) => (
  <S.Wrapper hasIcon={!!icon}>
    {!!children && <span>{children}</span>}
    {!!icon && icon}
  </S.Wrapper>
)

export default ButtonLink
