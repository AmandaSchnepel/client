import EndereçoOptions, { EndereçoListProps } from 'components/EndereçoOptions'
import Profile, { ProfileTemplateProps } from 'templates/Profile'

import MenuMock from 'components/Menu/mock'
import endereçoMock from 'components/EndereçoInfo/mock'

export default function ProfileEndereços(
  { list }: EndereçoListProps,
  props: ProfileTemplateProps
) {
  return (
    <Profile {...props}>
      <EndereçoOptions list={list} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      list: endereçoMock,
      menu: MenuMock
    }
  }
}
