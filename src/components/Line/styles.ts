import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  text-decoration: none;

  ${media.greaterThan('large')`
border-bottom: 0.12rem solid #D6D6D6;
opacity: 70%;
    `}
  ${media.lessThan('large')`
border-bottom: none;
    `}
`
