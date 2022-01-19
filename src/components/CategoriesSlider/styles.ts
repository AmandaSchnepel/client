import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${media.greaterThan('large')`
   .slick-slide > div {
      margin: 0 1rem 0 0;
      flex: 1 0 auto;
      height: 100%;
}
`}
  ${media.lessThan('large')`
   .slick-slide > div {
      margin: 0 1.5rem 0 0;
      flex: 1 0 auto;
      height: 100%;
}
`}
    .slick-prev,
    .slick-next {
    display: block;
    color: '#212529';
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    transform: translate(0, -50%);
  }
  .slick-prev {
    left: -4rem;
  }
  .slick-next {
    right: -4rem;
  }
  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    visibility: hidden;
  }
`
