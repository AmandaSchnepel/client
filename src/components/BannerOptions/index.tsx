import { useState } from 'react'
import OptionFarmacia from 'components/OptionFarmacia'
import OptionMercado from 'components/OptionMercado'
import OptionShopping from 'components/OptionShopping'
import * as S from './styles'

const BannerOptions = () => {
  const [isShown, setIsShown] = useState(false)
  return (
    <S.Wrapper>
      <S.Title>
        Faça suas <strong>compras</strong>
        <br /> sem sair de <strong>casa</strong>.{' '}
      </S.Title>

      <S.Container
        onMouseEnter={() => setIsShown(false)}
        onMouseLeave={() => setIsShown(true)}
      >
        <OptionMercado aria-label="Mercado" />
        <OptionShopping aria-label="Shopping" />
        <OptionFarmacia aria-label="Farmacia" />
      </S.Container>

      <S.GroupPhone>
        <S.ImagePhone src="/img/celular.png" aria-label="celular" />
        {isShown && (
          <S.Image
            src="/img/shopping-celular.png"
            aria-label="mercado-celular"
          />
        )}
      </S.GroupPhone>
    </S.Wrapper>
  )
}

export default BannerOptions
