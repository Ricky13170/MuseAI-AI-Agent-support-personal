import type { ReactNode } from 'react'

type FeatureCardProps = {
  feature: string
  title: string
  children: ReactNode
  className?: string
}

export function FeatureCard({ feature, title, children, className = '' }: FeatureCardProps) {
  return (
    <section className={`feature-card ${className}`} aria-label={title}>
      <span className="eyebrow">{feature}</span>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
