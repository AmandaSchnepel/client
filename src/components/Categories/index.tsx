import * as S from './styles'

export type CategoriesProps = {
  img: string
  title: string
}

const Categorias = ({img, title}: CategoriesProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title}/>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Categorias
