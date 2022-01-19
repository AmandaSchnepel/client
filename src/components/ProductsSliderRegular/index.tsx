import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Products, { ProductsProps } from 'components/Products'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

type SliderRegularProps = {
  items: ProductsProps[]
}

const settings: SliderSettings = {
  slidesToShow: 5.5,
  infinite: false,
  lazyLoad: 'progressive',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 5.4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 4.3
      }
    },
    {
      breakpoint: 820,
      settings: {
        arrows: false,
        slidesToShow: 3.6
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3.4
      }
    },
    {
      breakpoint: 650,
      settings: {
        arrows: false,
        slidesToShow: 3.8
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        slidesToShow: 2.8
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 2.7
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        slidesToShow: 2.6
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 2.3
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next products" />,
  prevArrow: <ArrowLeft aria-label="previous products" />
}

const ProductsSliderRegular = ({ items }: SliderRegularProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Products key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ProductsSliderRegular
