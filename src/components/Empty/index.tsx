import * as S from './styles'
import Button from 'components/Button'
import Link from 'next/link'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
  image: string
}

const Empty = ({ title, description, hasLink, image }: EmptyProps) => (
  <S.Wrapper>
    <S.Image src={image} aria-Label="carrinho vazio" />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Voltar para a loja</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
