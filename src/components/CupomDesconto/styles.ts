import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { CupomDescontoProps } from '.'

type WrapperProps = Pick<CupomDescontoProps, 'disabled'> & { error?: boolean }

export const Container = styled.div`
  display: flex;
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 16.1rem;
    height: 2.7rem;
    margin: 0 0.5rem 0 0;
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
    font-size: 1.2rem;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black2};
    font-family: ${theme.font.family};
    font-size: 1.2rem;
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
    width: 35rem;
    padding: ${theme.spacings.xsmall};
    border-bottom: 0.1rem solid ${theme.colors.grayLine};

    ${media.lessThan('medium')`
    padding: ${theme.spacings.xsmall} 0.5rem;
    width: 31rem;
    `}

    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
