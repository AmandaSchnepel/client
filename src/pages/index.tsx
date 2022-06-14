import Home, { HomeTemplateProps } from 'templates/Home'
import MenuMock from 'components/Menu/mock'
import SetorMock from 'components/SetoresSlider/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      menu: MenuMock,
      setores: SetorMock
    }
  }
}
