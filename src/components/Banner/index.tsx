import * as S from './styles'

export type BannerProps = {
  img: string
}

const Banner = ({ img }: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label="banner" />
  </S.Wrapper>
)

export default Banner
