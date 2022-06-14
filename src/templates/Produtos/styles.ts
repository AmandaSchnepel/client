import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem 5rem 0 5rem;

  ${media.lessThan('large')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 5rem 0 5rem;

  `}
`
export const div = styled.div`
  margin: 0 20rem 0 0;
  ${media.lessThan('large')`
margin: 0 0 2rem 0;

`}
`
