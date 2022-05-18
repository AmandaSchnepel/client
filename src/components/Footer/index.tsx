import { Instagram as IconInstagram } from '@styled-icons/bootstrap/Instagram'
import { Facebook as IconFacebook } from '@styled-icons/entypo-social/Facebook'
import { Whatsapp as IconWhatsApp } from '@styled-icons/bootstrap/Whatsapp'
import { LinkedinSquare as IconLinkedin } from '@styled-icons/boxicons-logos/LinkedinSquare'

import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Backgoround>
      <S.Container>
        <S.Group1>
          <S.Logo>
            <Logo size="xlarge" color="white1" />
          </S.Logo>

          <S.GroupLojas>
            <S.Title> Nossas Lojas </S.Title>
            <S.Developer>
              R. Harry Feeken, 1361 - Afonso Pena,
              <br /> São José dos Pinhais - PR,
              <br /> 83040-000
            </S.Developer>
            <S.Developer>
              R. Santa Rita, 1101 - Cidade Jardim,
              <br /> São José dos Pinhais - PR,
              <br /> 83035-250
            </S.Developer>
          </S.GroupLojas>

          <S.GroupContato>
            <S.Title> Fale conosco </S.Title>
            <S.Developer>+55 41 9288-6681</S.Developer>
            <S.Developer>+55 41 3534-0472</S.Developer>
            <S.Developer>equipe@supermercadojardim.com.br</S.Developer>
          </S.GroupContato>
        </S.Group1>

        <S.Line aria-label="linha"></S.Line>

        <S.Group2>
          <S.GroupCop>
            <S.Developer>© 2022 Supermercado Jardim</S.Developer>
          </S.GroupCop>

          <S.GroupIcons>
            <IconInstagram aria-label="instagram" />
            <IconFacebook aria-label="Facebook" />
            <IconWhatsApp aria-label="WhatsApp" />
            <IconLinkedin aria-label="Linkedin" />
          </S.GroupIcons>
        </S.Group2>
      </S.Container>
    </S.Backgoround>
  </S.Wrapper>
)

export default Footer
