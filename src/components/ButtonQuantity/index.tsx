import React from 'react'
import * as S from './styles'

export type ButtonQualityProps = {
  count: number
  size?: 'regular' | 'small'
}

const ButtonQuantity: React.FunctionComponent<ButtonQualityProps> = ({
  size = 'regular'
}: ButtonQualityProps) => {
  const [count, setCount] = React.useState<number>(1)

  const inc = () => {
    setCount(count + 1)
  }

  const dec = () => {
    setCount(count - 1)
  }

  return (
    <S.Wrapper size={size}>
      <button aria-label="diminuir" onClick={dec}>
        -
      </button>

      <input type="number" value={count} />

      <button aria-label="aumentar" onClick={inc}>
        +
      </button>
    </S.Wrapper>
  )
}

export default ButtonQuantity
