import FormSignUp from 'components/FormSignUp'
import Auth from 'templates/Auth'

export default function SignUp() {
  return (
    <Auth title="Bem Vindo!" subtitle="Crie uma conta para continuar">
      <FormSignUp />
    </Auth>
  )
}
