import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as ImagesStyles from 'components/Images/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 30rem;
    ${media.lessThan('small')`
  width: 26rem;
`}
    .slick-dots {
      list-style: none;
      max-width: 30rem;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      li {
        background: ${theme.colors.grayLine};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.green};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    ${media.greaterThan('large')`
  ${ImagesStyles.Wrapper} {
    max-width: 30rem;
  }

`}
    ${media.lessThan('medium')`
  ${ImagesStyles.Wrapper} {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`}
  `}
`
