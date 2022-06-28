import React, { useState } from 'react'

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import ButtonLink from 'components/ButtonLink'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import * as S from './styles'

export type CartPaymentsProps = {
  items: PaymentOptionsProps[]
}

const CartPayments = ({ items }: CartPaymentsProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Metodo de pagamento</S.Title>
        <S.Content onClick={() => setIsOpen(true)}>
          <ButtonLink>+add</ButtonLink>
        </S.Content>
      </S.Container>

      {items.map((item, index) => (
        <PaymentOptions key={index} {...item} />
      ))}

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default CartPayments
