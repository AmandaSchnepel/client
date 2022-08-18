import Empty from 'components/Empty'
import { Container } from 'components/Container'

export default function Page404() {
  return (
    <Container>
      <Empty
        title="404: Not found"
        description="Ops... Essa pagina não existe. Volte para a loja e aproveite nossos produtos"
        hasLink
        image="/img/emojitriste.png"
      />
    </Container>
  )
}
