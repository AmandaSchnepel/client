import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Products, { ProductsProps } from 'components/Products'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

type SliderRegularProps = {
  items: ProductsProps[]
}

const settings: SliderSettings = {
  slidesToShow: 5.2,
  infinite: false,
  lazyLoad: 'progressive',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 4.8
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
        slidesToShow: 3.1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 4.15
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
      breakpoint: 540,
      settings: {
        arrows: false,
        slidesToShow: 2.9
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
      breakpoint: 414,
      settings: {
        arrows: false,
        slidesToShow: 2.8
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        slidesToShow: 2.7
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 2.5
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        slidesToShow: 2.5
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 2.15
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        slidesToShow: 1.9
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
        <Products size="regular" key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ProductsSliderRegular
