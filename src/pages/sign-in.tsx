import FormSignin from 'components/FormSignin'
import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth title="Já tem cadastro?" subtitle="Faça login na sua conta abaixo:">
      <FormSignin />
    </Auth>
  )
}
