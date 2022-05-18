import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 6rem 0 0 0;
`

export const Title = styled.h1`
${({ theme }) => css`
  position: absolute;
  left: 59.2%;
  transform: translateX(-50%);
  font-size: 5rem;
  color: #212529;
  font-weight: ${theme.font.light};
  margin: 3.8rem 0 0 0;
  > strong {
    font-weight: ${theme.font.bold};
  }
`}
@media(max-width: 2560px){
  position: absolute;
  left:59.7%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1700px){
    position: absolute;
    left:59.2%;
    transform: translateX(-50%);
    }
   }
@media(max-width: 1500px){
  position: absolute;
  left:61.2%;
  transform: translateX(-50%);
    }
   }
`

type ImageProps = {
  src: string
}
export const GroupPhone = styled.div`
  display: flex;
  margin: 0 0 0 -5rem;
`

export const ImagePhone = styled.div<ImageProps>`
  ${({ src }) => css`
    display: flex;
    width: 41rem;
    height: 48.5rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
  `}
`
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    display: flex;
    width: 44rem;
    height: 48.5rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
    margin: 0 0 0 -37.55rem;
  `}
`

export const Container = styled.div`
  display: flex;
`
