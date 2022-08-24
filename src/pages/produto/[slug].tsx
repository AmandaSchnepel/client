import Produto, { ProdutosProps } from 'templates/Produto'

import ImageMock from 'components/ImagesSlider/mock'
import InfoMock from 'components/ProductsInfo/mock'

export default function Index(props: ProdutosProps) {
  return <Produto {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'creme-de-leite' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      image: ImageMock,
      items: InfoMock
    }
  }
}
