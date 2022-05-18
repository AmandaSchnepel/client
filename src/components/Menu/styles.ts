import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  display: flex;
  align-items: center;
  padding: 3.2rem 0 1rem 0;
  position: relative;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    cursor: pointer;
    width: 2.8rem;
    height: 2.8rem;
  `}
  ${media.greaterThan('large')`
   margin: 0 0 0 1.5rem;
  `}
`
export const IconsGroupMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const MenuGroup = styled.div`
  ${media.lessThan('medium')`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  `}
  ${media.greaterThan('medium')`
  display: flex;
  flex-grow: 1;
  `}

  ${IconsGroupMenu} {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
  }
`

export const LinksGroup = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-start;
`

export const GroupLogo = styled.div`
  ${media.lessThan('large')`
size: normal;
position: absolute;
left:50%;
transform: translateX(-50%);
`}

  ${media.greaterThan('large')`
padding: 0 8rem 0 0;
`}
`

export const GroupSpacings1 = styled.div`
  display: flex;
  margin: 0 5rem 0 5rem;
`

export const GroupSpacings2 = styled.div`
  display: flex;
  margin: 0 4rem 0 4rem;
`

export const IconMenuStyled = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.blackgray};
    margin: 0.1rem 0.5rem 0 0.5rem;
  `}
`
export const IconMenuSpacing = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.blackgray};
    margin: -0.08rem 0.5rem 0 0.5rem;
  `}
`

type ImageProps = {
  src: string
}

export const ImageMenu = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 3.3rem;
    height: 3.3rem;
    margin: -0.3rem 1.2rem 0 0;
    border-radius: 5rem;
    background-color: ${theme.colors.lightGray1};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`

export const LinksMenu = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    font-size: ${theme.sizes.large};
    font-weight: ${theme.font.medium};
    text-decoration: none;
  `}
`

export const MenuNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 0 0;
`

export const MenuConfigGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;

    > svg{
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.blackgray};
    margin: 1.9rem 1rem 0 0.4rem;
  `}
`
//informações do usuario
export const GroupUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
//links do menu
export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    font-size: ${theme.sizes.icons};
    margin: 2rem ${theme.spacings.large} 0 1rem;
    font-weight: ${theme.font.medium};
    text-decoration: none;
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    background: ${theme.colors.white1};
    z-index: 1;
    position: absolute;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    display: flex;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
export const MenuLogout = styled.div`
  display: flex;
  flex-grow: 1;
  align-content: stretch;
  justify-content: space-between;
`

export const ButtonLogin = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`
export const Cadastrar = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    text-decoration: underline;
    font-weight: ${theme.font.regular};
    color: ${theme.colors.green};
    font-size: ${theme.sizes.medium};
    margin: 0 1.5rem 0 0;
  `}
`
export const Entrar = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.5rem;
    height: 4.3rem;
    font-size: 1.8rem;
    font-weight: ${theme.font.regular};
    border-radius: 0.8rem;
    background: ${theme.colors.green};
    color: ${theme.colors.white1};
    border: 0;
    text-decoration: none;
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    padding: 0 0 6rem 0;

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.green};
    border-bottom: 0.2rem solid ${theme.colors.green};
  `}
`
