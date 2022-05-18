import { useState } from 'react'
import * as S from './styles'

const OptionShopping = () => {
  const [isShown, setIsShown] = useState(false)
  return (
    <S.Wrapper>
      <S.ButtonShopping
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <S.ImageShopping src="/img/sacolas.png" aria-label="sacolas-celular" />

        <S.Title>Shopping</S.Title>
      </S.ButtonShopping>

      <S.GroupPhone>
        {isShown && (
          <S.Image
            src="/img/shopping-celular.png"
            aria-label="shopping-celular"
          />
        )}
      </S.GroupPhone>
    </S.Wrapper>
  )
}

export default OptionShopping
