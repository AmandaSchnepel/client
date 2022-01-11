import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Categories, { CategoriesProps } from 'components/Categories'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

type SliderCategoriesProps = {
  items: CategoriesProps[]
}

const settings: SliderSettings = {
  slidesToShow: 13,
  infinite: false,
  lazyLoad: 'progressive',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 12.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 10.5
      }
    },
    {
      breakpoint: 920,
      settings: {
        arrows: false,
        slidesToShow: 9.2
      }
    },
    {
      breakpoint: 820,
      settings: {
        arrows: false,
        slidesToShow: 8.5
      }
    },
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        slidesToShow: 8.2
      }
    },
    {
      breakpoint: 650,
      settings: {
        arrows: false,
        slidesToShow: 6.7
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        slidesToShow: 5.3
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 4.8
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 4.2
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        slidesToShow: 3.5
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next banner" />,
  prevArrow: <ArrowLeft aria-label="previous banner" />
}

const CategoriesSlider = ({ items }: SliderCategoriesProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Categories key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CategoriesSlider
