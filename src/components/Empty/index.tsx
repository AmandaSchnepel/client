import * as S from './styles'
import Button from 'components/Button'
import Link from 'next/link'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image src="/img/carrinhovazio.png" alt="Carrinho vazio" role="image" />

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
