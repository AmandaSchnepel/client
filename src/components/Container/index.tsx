import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8rem;
  padding-right: 8rem;

  ${media.lessThan('medium')`
  padding-left: 1.5rem;
  padding-right: 1.5rem;

`}
`
