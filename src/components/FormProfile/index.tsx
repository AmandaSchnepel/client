import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading>Meu Perfil</Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue="johndoe@gmail.com"
        label="E-mail"
        disabled
      />

      <TextField
        name="senha"
        type="senha"
        placeholder="Digite sua senha"
        label="Senha"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="Nova senha"
        label="Nova senha"
      />

      <Button size="large">Salvar</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
