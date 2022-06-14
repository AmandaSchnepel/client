import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const SectionSpacings = styled.div`
  margin: 15rem 0 15rem 0;
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2.6rem;
    color: #212529;
    font-weight: ${theme.font.light};
    margin: 5rem 0 5rem 0;
    > strong {
      font-weight: ${theme.font.bold};
    }
  `}
`
