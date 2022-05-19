import { ImagesProps } from 'components/Images'

import Images from 'components/Images'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

type ImagesSliderProps = {
  items: ImagesProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: false,
  verticalSwiping: false,
  infinite: false
}

const ImagesSlider = ({ items }: ImagesSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Images key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ImagesSlider
