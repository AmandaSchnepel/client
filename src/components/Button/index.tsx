
import {AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'


type ButtonTypes = 
| AnchorHTMLAttributes<HTMLAnchorElement> 
| ButtonHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large'
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
