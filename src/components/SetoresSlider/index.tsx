import Setores, { SetoresProps } from 'components/Setores'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

type SetoresSliderProps = {
  items: SetoresProps[]
}

const settings: SliderSettings = {
  slidesToShow: 1.5,
  infinite: false,
  lazyLoad: 'progressive',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        arrows: false
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
