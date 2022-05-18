import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
`

export const ButtonFarmacia = styled.div`
${({ theme }) => css`
  cursor: pointer;
  position: absolute;
  left: 75.2%;
  transform: translateX(-50%);
  background: ${theme.colors.marrom};
  align-items: center;
  justify-content: center;
  width: 18.8rem;
  height: 19.1rem;
  border-radius: 1.2rem;
  margin: 25rem 40rem 0 10rem;
`}

@media(max-width: 2560px){
  position: absolute;
  left:68%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2270px){
  position: absolute;
  left:68.3%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2190px){
  position: absolute;
  left:68.6%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2120px){
  position: absolute;
  left:68.9%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2080px){
  position: absolute;
  left:69.3%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 2000px){
  position: absolute;
  left:69.7%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1950px){
  position: absolute;
  left:70%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1950px){
  position: absolute;
  left:70.4%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1850px){
  position: absolute;
  left:70.8%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1750px){
  position: absolute;
  left:71.3%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1700px){
  position: absolute;
  left:72.2%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1675px){
  position: absolute;
  left:72.5%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1650px){
  position: absolute;
  left:72.8%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1630px){
  position: absolute;
  left:73%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1600px){
  position: absolute;
  left:73.3%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1565px){
  position: absolute;
  left:73.6%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1535px){
  position: absolute;
  left:74%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1510px){
  position: absolute;
  left:74.3%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1480px){
  position: absolute;
  left:74.8%;
  transform: translateX(-50%);
    }
   }
   @media(max-width: 1435px){
  position: absolute;
  left:75%;
  transform: translateX(-50%);
    }
   }
`
type ImageProps = {
  src: string
}

export const ImageFarmacia = styled.div<ImageProps>`
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
    margin: 0 0 0 -45.7rem;
  `}
`
