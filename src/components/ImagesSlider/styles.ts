import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      width: 30rem;
      height: 3rem;
      list-style: none;
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
        transition: box-shadow ${theme.transition.default};
        &.slick-active {
          background: ${theme.colors.green};
        }
        &:focus-within {
          box-shadow: 0 0 0 0.3rem ${theme.colors.green};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    .slick-slide {
      visibility: hidden;
      &.slick-active.slick-current {
        visibility: visible;
      }
    }
  `}
`
