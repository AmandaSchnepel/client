import styled, { css } from 'styled-components'

export const list = styled.div`
  ${({ theme }) => css`
    margin: 1.5rem 0 0 0;
    background: ${theme.colors.white2};
    color: ${theme.colors.black1};
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }
    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
