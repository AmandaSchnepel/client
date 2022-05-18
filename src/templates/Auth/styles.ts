import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 7rem 0 7rem 0;

  ${media.lessThan('medium')`
    margin: 3rem 0 3rem 0;

`}
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Spacing = styled.div`
  margin: 2rem 0 4rem 0;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${theme.colors.black1};
    font-size: 1.8rem;
    font-weight: ${theme.font.medium};

    > strong {
      font-weight: ${theme.font.regular};
      font-size: 1.6rem;
    }
  `}
`
