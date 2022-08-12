import Heading from 'components/Heading'
import { EndereçoInfoProps } from 'components/EndereçoInfo'
import * as S from './styles'

export type EndereçoListProps = {
  list: EndereçoInfoProps[]
}

const EndereçoOptions = ({ list }: EndereçoListProps) => (
  <>
    <Heading>Endereços cadastrados</Heading>

    {list?.map((list) => (
      <S.list key={list.title}>
        <span>
          {list.title} <br /> {list.subtitle}{' '}
        </span>
      </S.list>
    ))}
  </>
)

export default EndereçoOptions
