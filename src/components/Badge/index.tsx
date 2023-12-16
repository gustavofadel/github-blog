import { ReactNode } from 'react'
import { BadgeContainer } from './styles'

interface BadgeProps {
  icon: ReactNode
  text: string
}

export function Badge({ icon, text }: BadgeProps) {
  return (
    <BadgeContainer>
      {icon}
      <span>{text}</span>
    </BadgeContainer>
  )
}
