import React, { useState } from 'react'

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import ButtonLink from 'components/ButtonLink'
import EndereçoInfo, { EndereçoInfoProps } from 'components/EndereçoInfo'
import * as S from './styles'

export type CartEndereçoProps = {
  items: EndereçoInfoProps[]
}
const CartEndereço = ({ items }: CartEndereçoProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Endereço de entrega</S.Title>
        <S.Content onClick={() => setIsOpen(true)}>
          <ButtonLink>Mudar</ButtonLink>
        </S.Content>
      </S.Container>

      {items.map((item) => (
        <EndereçoInfo key={item.title} {...item} />
      ))}

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default CartEndereço
