import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

type SliderBannerProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  slidesToShow: 2.6,
  infinite: false,
  lazyLoad: 'progressive',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 2.3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.1
      }
    },
    {
      breakpoint: 820,
      settings: {
        arrows: false,
        slidesToShow: 1.4
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1.7
      }
    },
    {
      breakpoint: 650,
      settings: {
        arrows: false,
        slidesToShow: 1.6
      }
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        slidesToShow: 1.9
      }
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        slidesToShow: 1.6
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.3
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        slidesToShow: 1.4
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next banner" />,
  prevArrow: <ArrowLeft aria-label="previous banner" />
}

const BannerSlider = ({ items }: SliderBannerProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Banner key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
