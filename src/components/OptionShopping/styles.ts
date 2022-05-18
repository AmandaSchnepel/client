import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
`

export const ButtonShopping = styled.div`
${({ theme }) => css`
  cursor: pointer;
  position: absolute;
  left: 60.3%;
  transform: translateX(-50%);
  background: ${theme.colors.lightred};
  align-items: center;
  justify-content: center;
  width: 18.8rem;
  height: 19.1rem;
  border-radius: 1.2rem;
  margin: 25rem 40rem 0 10rem;
`}
@media(max-width: 2560px){
  position: absolute;
  left:59%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2500px){
  position: absolute;
  left:58.7%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2400px){
  position: absolute;
  left:58.6%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2350px){
  position: absolute;
  left:58.4%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1500px){
  position: absolute;
  left:59.3%;
  transform: translateX(-50%);
    }
   }
`
type ImageProps = {
  src: string
}

export const ImageShopping = styled.div<ImageProps>`
  ${({ src }) => css`
    display: flex;
    width: 11.1rem;
    height: 10.2rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    margin: 3rem 0 0 3.8rem;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.sizes.xlarge};
    color: ${theme.colors.black1};
    font-weight: ${theme.font.medium};
    margin: 1rem 0 0 5rem;
  `}
`

export const GroupPhone = styled.div`
  display: flex;
`

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    display: flex;
    z-index: 1;
    width: 44rem;
    height: 48.5rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
    margin: 0 0 0 -45.6rem;
  `}
`
