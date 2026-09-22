import { useEffect, useState } from 'react'

function currentPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

export function navigate(to: string) {
  const hash = to.split('#')[1]
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  if (hash) {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0 })
  }
}

export function usePath() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const onChange = () => setPath(currentPath())
    window.addEventListener('popstate', onChange)
    return () => window.removeEventListener('popstate', onChange)
  }, [])

  return path
}
