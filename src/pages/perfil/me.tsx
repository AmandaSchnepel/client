import FormProfile from 'components/FormProfile'
import Profile, { ProfileTemplateProps } from 'templates/Profile'

export default function Me(props: ProfileTemplateProps) {
  return (
    <Profile {...props}>
      <FormProfile />
    </Profile>
  )
}
