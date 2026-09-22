import { useCallback } from 'react'
import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from '../router'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }

export function Link({ to, onClick, ...rest }: LinkProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event)
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.button !== 0) return
      event.preventDefault()
      navigate(to)
    },
    [onClick, to],
  )

  return <a href={to} onClick={handleClick} {...rest} />
}
