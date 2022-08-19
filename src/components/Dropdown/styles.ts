import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.black1};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white1};
    color: ${theme.colors.black1};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    box-shadow: 0 -0.2rem 0.4rem ${rgba(theme.colors.black1, 0.2)};
    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white1};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
