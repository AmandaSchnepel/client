import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'
import * as CheckboxStyles from 'components/Checkbox/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const IconWrapper = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow-y: auto;
    padding: 0 ${theme.spacings.small};
    margin-top: 5.6rem;
    margin-bottom: 2rem;
    transition: transform ${theme.transition.default};
    ${media.greaterThan('medium')`
      overflow-y: initial;
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
    `}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    transition: opacity ${theme.transition.default};
    opacity: 0;
    position: absolute;
  `}
`

export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xsmall};
    }
    & + div {
      border-top: 0.1rem solid ${rgba(theme.colors.gray, 0.2)};
      margin-top: ${theme.spacings.small};
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Footer = styled.div`
  margin-top: 2.5rem;
`

const wrapperModifiers = {
  open: (theme: DefaultTheme) => css`
    z-index: ${theme.layers.modal};
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    ${Overlay} {
      z-index: ${theme.layers.modal};
      background-color: #fff;
      top: 0;
      left: 0;
      position: fixed;
      width: 100%;
      height: 100vh;
      opacity: 1;
    }
    ${Content} {
      margin-top: ${theme.spacings.medium};
      transform: translateY(0);
      overflow-y: scroll;
    }
    ${Content}, ${Footer}, ${IconWrapper} {
      z-index: ${theme.layers.modal};
    }
    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black1};
      font-size: ${theme.sizes.xlarge};
      font-weight: ${theme.font.medium};
    }
    ${CheckboxStyles.Label} {
      color: ${theme.colors.black1};
    }
    ${IconWrapper} {
      color: ${theme.colors.black1};
      > svg {
        position: absolute;
        width: 30px;
        right: 0.8rem;
        top: 0.8rem;
        &:first-child {
          display: none;
        }
      }
    }
  `,

  close: (theme: DefaultTheme) => css`
    ${IconWrapper} {
      color: ${theme.colors.black1};
      > svg:last-child {
        display: none;
      }
    }
    ${Content} {
      transform: translateY(3rem);
      height: 0;
    }
    ${Content}, ${Footer} {
      visibility: hidden;
      position: absolute;
      left: 0;
    }
  `
}

type WrapperProps = {
  isOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    ${media.lessThan('medium')`
      ${!!isOpen && wrapperModifiers.open(theme)}
      ${!isOpen && wrapperModifiers.close(theme)}
    `}
    ${media.greaterThan('medium')`
    margin: 3rem 0 0 0;
    `}
  `}
`
