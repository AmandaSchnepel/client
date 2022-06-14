import Favoritos, { FavoritosTemplateProps } from 'templates/Favoritos'

import ProductsMock from 'components/ProductsSliderRegular/mock'
import MenuMock from 'components/Menu/mock'

export default function FavoritosPage(props: FavoritosTemplateProps) {
  return <Favoritos {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      menu: MenuMock,
      products: ProductsMock
    }
  }
}
