import { AnchorHTMLAttributes, ReactNode } from 'react'
import { LinkContainer } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Link({ children, ...props }: LinkProps) {
  return <LinkContainer {...props}>{children}</LinkContainer>
}
