import * as S from './styles'

export type UserProps = {
  img: string
  title: string
  link: string
}

const MenuUserInfo = ({ img, title, link }: UserProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
    <S.InfoUser>
      <S.title>{title}</S.title>
      <S.LinkLogout as="a" title="Sair" href={link}>
        Sair
      </S.LinkLogout>
    </S.InfoUser>
  </S.Wrapper>
)

export default MenuUserInfo
