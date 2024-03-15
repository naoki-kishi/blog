import { css } from 'hono/css'
import { PropsWithChildren } from 'hono/jsx'
import { MDXComponents } from 'mdx/types'
import { StyledPre } from '../components/StyledPre'
import { blue, border, grayLight } from '../styles/color'

export function useMDXComponents(): MDXComponents {
  const components = {
    img: Image,
    pre: StyledPre,
    blockquote: BlockQuote,
    a: Link,
  }
  return components
}

const imageCss = css`
  display: block;
  max-height: 500px;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid ${border};
`

export function Image(props: PropsWithChildren<Hono.ImgHTMLAttributes>) {
  return (
    <a href={props.src}>
      <img src={props.src} alt={props.alt} class={imageCss} />
    </a>
  )
}

const blockQuoteCss = css`
  border-left: 0.25rem solid ${border};
  color: ${grayLight};
  margin: 0.8rem 0;
  padding: 0.5rem 1rem;

  p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 600px) {
    padding: 0 5rem 0 1.25rem;
  }
`

function BlockQuote(props: PropsWithChildren<Hono.BlockquoteHTMLAttributes>) {
  return (
    <blockquote class={blockQuoteCss} cite={props.cite}>
      {props.children}
    </blockquote>
  )
}

const linkCss = css`
  color: ${blue};
`

function Link(props: PropsWithChildren<Hono.AnchorHTMLAttributes>) {
  return (
    <a href={props.href} class={linkCss}>
      {props.children}
    </a>
  )
}
