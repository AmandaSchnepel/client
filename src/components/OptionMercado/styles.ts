import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
`

export const ButtonMercado = styled.a`
${({ theme }) => css`
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  left: 45%;
  transform: translateX(-50%);
  background: ${theme.colors.lightgreen};
  align-items: center;
  justify-content: center;
  width: 18.8rem;
  height: 19.1rem;
  border-radius: 1.2rem;
  margin: 25rem 40rem 0 10rem;
`}
@media(max-width: 2560px){
  position: absolute;
  left:49.8%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2500px){
  position: absolute;
  left:49.4%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2450px){
  position: absolute;
  left:49.3%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2400px){
  position: absolute;
  left:49%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2350px){
  position: absolute;
  left:48.7%;
  transform: translateX(-50%);
    }
   }
  
   @media(max-width: 2300px){
  position: absolute;
  left:48.4%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2250px){
  position: absolute;
  left:48.2%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2200px){
  position: absolute;
  left:48.1%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2150px){
  position: absolute;
  left:47.8%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2100px){
  position: absolute;
  left:47.4%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2050px){
  position: absolute;
  left:47.3%;
  transform: translateX(-50%);
    }
   }
@media(max-width: 2000px){
  position: absolute;
  left:46.9%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1920px){
  position: absolute;
  left:46.5%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1900px){
  position: absolute;
  left:46.3%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1850px){
  position: absolute;
  left:46%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1800px){
  position: absolute;
  left:45.5%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1750px){
  position: absolute;
  left:45.2%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1710px){
  position: absolute;
  left:45%;
  transform: translateX(-50%);
    }
   }
@media(max-width: 1700px){
  position: absolute;
  left:44.4%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1675px){
  position: absolute;
  left:44%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1650px){
  position: absolute;
  left:43.7%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1630px){
  position: absolute;
  left:43.4%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1600px){
  position: absolute;
  left:43%;
  transform: translateX(-50%);
    }
   }
@media(max-width: 1550px){
  position: absolute;
  left:42.2%;
  transform: translateX(-50%);
    }
   }
@media(max-width: 1500px){
  position: absolute;
  left:44.2%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1480px){
  position: absolute;
  left:43.6%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1450px){
  position: absolute;
  left:43.5%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1400px){
  position: absolute;
  left:42.6%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1350px){
  position: absolute;
  left:42.1%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1300px){
  position: absolute;
  left:42%;
  transform: translateX(-50%);
    }
   }
`
type ImageProps = {
  src: string
}

export const ImageMercado = styled.div<ImageProps>`
  ${({ src }) => css`
    display: flex;
    width: 12.1rem;
    height: 10.3rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    margin: 3rem 0 0 3rem;
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
  margin: 0 0 0 8rem;
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
