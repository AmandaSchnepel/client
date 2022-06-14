import { SetoresProps } from 'components/Setores'

import Setores from 'components/Setores'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

type SetoresSliderProps = {
  items: SetoresProps[]
}

const settings: SliderSettings = {
  slidesToShow: 3,
  infinite: false,
  lazyLoad: 'progressive',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        slidesToShow: 2.5
      }
    },
    {
      breakpoint: 425,
      settings: {
        arrows: false,
        slidesToShow: 2.05
      }
    },
    {
      breakpoint: 412,
      settings: {
        arrows: false,
        slidesToShow: 1.9
      }
    },
    {
      breakpoint: 393,
      settings: {
        arrows: false,
        slidesToShow: 1.8
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.7
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 1.45
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        slidesToShow: 1.25
      }
    }
  ]
}

const SetoresSlider = ({ items }: SetoresSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Setores key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default SetoresSlider
