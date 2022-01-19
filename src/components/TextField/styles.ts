import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white1};
    opacity: 60%;
    border-radius: 0.4rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.05rem solid;
    border-color: ${theme.colors.grayBox};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.white1};
    }
  `}
`
export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.sizes.xsmall};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black2};
    font-family: ${theme.font.family};
    font-size: ${theme.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    color: ${theme.colors.black2};
    cursor: pointer;
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.grayBox};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
