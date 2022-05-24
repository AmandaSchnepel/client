import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  margin-top: 20rem;
  ${media.greaterThan('medium')`
    margin-top: 45rem;
  `}
`
export const Wrapper = styled.div``
export const Container = styled.div`
  display: flex;
  margin: 10rem 15rem 0 15rem;
`
