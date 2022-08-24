import MenuMock from 'components/Menu/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'
import ProdutosTemplate, { ProdutosTemplateProps } from 'templates/Produtos'
import ProductsMock from 'components/ProductsSliderRegular/mock'

export default function ProdutosPage(props: ProdutosTemplateProps) {
  return <ProdutosTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      menu: MenuMock,
      products: ProductsMock,
      filterItems: filterItemsMock
    }
  }
}
