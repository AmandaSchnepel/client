import { Done as DoneIcon } from '@styled-icons/material/Done'
import * as S from './styles'

export type PaymentOptionsProps = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ number, flag, img }: PaymentOptionsProps) => (
  <S.Wrapper>
    <S.Image>
      <img src={img} alt={number} />
    </S.Image>
    <S.Titulo>
      {flag} {number}
    </S.Titulo>
    <S.Icon>
      <DoneIcon />
    </S.Icon>
  </S.Wrapper>
)

export default PaymentOptions
