import { motion, MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

/* Long, low-bounce spring. It glides up and eases to rest. */
const spring = {
  type: 'spring' as const,
  duration: 2.15,
  bounce: 0.12,
}

const tags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  h2: motion.h2,
  p: motion.p,
  footer: motion.footer,
} as const

type Tag = keyof typeof tags

type RevealProps = {
  as?: Tag
  className?: string
  children: ReactNode
  delay?: number
  y?: number
}

export function Reveal({ as = 'div', className, children, delay = 0, y = 22 }: RevealProps) {
  const Comp = tags[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -8% 0px' }}
      transition={{ ...spring, delay }}
    >
      {children}
    </Comp>
  )
}

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
