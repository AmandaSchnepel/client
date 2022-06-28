import Button from 'components/Button'
import * as S from './styles'

export type PaymentProps = {
  ValorInicial: string
  ValorTaxa: string
  ValorDesconto: string
  ValorFinal: string
}

const Payment = ({
  ValorInicial,
  ValorTaxa,
  ValorDesconto,
  ValorFinal
}: PaymentProps) => (
  <S.Wrapper aria-label="Payments">
    <S.Content>
      <S.Title>Subtotal:</S.Title>
      <S.Valor>{ValorInicial}</S.Valor>
    </S.Content>

    <S.Content>
      <S.Title>Taxa de entrega:</S.Title>
      <S.Valor>{ValorTaxa}</S.Valor>
    </S.Content>

    <S.Content>
      <S.Title>Desconto:</S.Title>
      <S.Valor>{ValorDesconto}</S.Valor>
    </S.Content>

    <S.Content>
      <S.Title>Total:</S.Title>
      <S.Valor>{ValorFinal}</S.Valor>
    </S.Content>

    <S.Container>
      <Button size="medium">Finalizar compra</Button>
    </S.Container>
  </S.Wrapper>
)

export default Payment
