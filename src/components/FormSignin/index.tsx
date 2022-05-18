import { Apple as AppleIcon } from '@styled-icons/boxicons-logos/Apple'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'

import * as S from './styles'

const FormSignin = () => (
  <S.Wrapper>
    <form>
      <S.Content>
        <S.Form>
          <TextField
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <S.Spacing1>
            <TextField
              label="Senha"
              name="password"
              placeholder="Senha"
              type="password"
            />
          </S.Spacing1>
        </S.Form>

        <S.Spacing2>
          <Button size="large">Entrar</Button>
        </S.Spacing2>

        <S.Spacing1>
          <Link href="#" passHref>
            <S.ForgotPassword>Esqueceu a senha?</S.ForgotPassword>
          </Link>
        </S.Spacing1>

        <S.Spacing3>
          <S.Container>
            <S.spacing>
              <S.Line />
            </S.spacing>

            <S.Title>ou</S.Title>

            <S.spacing>
              <S.Line />
            </S.spacing>
          </S.Container>
        </S.Spacing3>

        <S.Developer>Faça login com suas redes sociais</S.Developer>

        <S.Spacing3>
          <S.Icons>
            <S.Google href="#" src="/img/google.png" aria-label="Google" />
            <S.Facebook href="#" src="/img/facebook.png" aria-label="Google" />
            <AppleIcon href="#" />
          </S.Icons>
        </S.Spacing3>

        <S.Container>
          <S.Developer>
            Ainda não tem uma conta?
            <Link href="http://localhost:3000/sign-up">
              <a>Cadastre-se</a>
            </Link>
          </S.Developer>
        </S.Container>
      </S.Content>
    </form>
  </S.Wrapper>
)

export default FormSignin
