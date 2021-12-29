import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifires = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block `}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifires.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifires.greaterThan(greaterThan)}
  `}
`

//<MediaMatch greaterThan="medium">

//elemento vai aparecer só no desktop
//</MediaMatch>

//<MediaMatch lessThan="medium">

//elemento vai aparecer só no mobile
//</MediaMatch>
