import Home, { HomeTemplateProps } from 'templates/Home'
import BannerMock from 'components/BannerSlider/mock'
import CategoriesMock from 'components/CategoriesSlider/mock'
import MenuMock from 'components/Menu/mock'
import ProductsMock from 'components/ProductsSliderRegular/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      menu: MenuMock,
      categories: CategoriesMock,
      banners: BannerMock,
      productsSlider1Regular: ProductsMock,
      productsSlider2Regular: ProductsMock
    }
  }
}
