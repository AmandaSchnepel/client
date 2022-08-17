import styled from 'styled-components'
import { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Image = styled.img`
  max-width: 11%;
  margin-bottom: 2rem;

  ${media.lessThan('small')`
    max-width: 30%;
`}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    font-size: 2.4rem;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: ${theme.spacings.medium};
  `}
`
