import Heading from 'components/Heading'
import { PaymentOptionsProps } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentOptionsProps[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading>Minha carteira</Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>
          {card.flag} {card.number}
        </span>
      </S.Card>
    ))}
  </>
)

export default CardsList
