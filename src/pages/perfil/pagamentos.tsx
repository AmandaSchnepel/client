import CardsList, { CardsListProps } from 'components/CardsList'
import Profile, { ProfileTemplateProps } from 'templates/Profile'

import MenuMock from 'components/Menu/mock'
import mockCards from 'components/PaymentOptions/mock'

export default function ProfileCards(
  { cards }: CardsListProps,
  props: ProfileTemplateProps
) {
  return (
    <Profile {...props}>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards,
      menu: MenuMock
    }
  }
}
