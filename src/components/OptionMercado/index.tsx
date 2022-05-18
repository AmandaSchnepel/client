import { useState } from 'react'
import * as S from './styles'

const OptionMercado = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <S.Wrapper>
      <S.ButtonMercado
        href="/mercado"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <S.ImageMercado
          src="/img/carrinho-mercado.png"
          aria-label="carrinho-celular"
        />

        <S.Title>Mercado</S.Title>
      </S.ButtonMercado>

      <S.GroupPhone>
        {isShown && (
          <S.Image
            src="/img/mercado-celular.png"
            aria-label="mercado-celular"
          />
        )}
      </S.GroupPhone>
    </S.Wrapper>
  )
}
export default OptionMercado
