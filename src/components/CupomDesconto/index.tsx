import Button from 'components/Button'
import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type CupomDescontoProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const CupomDesconto = ({
  label,
  labelFor = '',
  initialValue = '',
  disabled = false,
  error,
  onInput,
  ...props
}: CupomDescontoProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.Container>
        <S.InputWrapper>
          <S.Input
            type="text"
            onChange={onChange}
            value={value}
            disabled={disabled}
            {...props}
          />
        </S.InputWrapper>
        <Button size="xxsmall">Aplicar</Button>
      </S.Container>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default CupomDesconto
