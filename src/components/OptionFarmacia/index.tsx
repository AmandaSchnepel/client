import { useState } from 'react'
import * as S from './styles'

const OptionFarmacia = () => {
  const [isShown, setIsShown] = useState(false)
  return (
    <S.Wrapper>
      <S.ButtonFarmacia
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <S.ImageFarmacia
          src="/img/remedios.png"
          aria-label="remedios-celular"
        />

        <S.Title>Farmácia</S.Title>
      </S.ButtonFarmacia>

      <S.GroupPhone>
        {isShown && (
          <S.Image
            src="/img/farmacia-celular.png"
            aria-label="farmacia-celular"
          />
        )}
      </S.GroupPhone>
    </S.Wrapper>
  )
}

export default OptionFarmacia
