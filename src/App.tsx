import { useEffect } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { Contact } from './pages/Contact'
import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'
import { Privacy } from './pages/Privacy'
import { usePath } from './router'

const TITLES: Record<string, string> = {
  '/': 'Clovy — Find the little moments worth keeping.',
  '/privacy': 'Privacy Policy — Clovy',
  '/contact': 'Contact — Clovy',
}

export default function App() {
  const path = usePath()

  useEffect(() => {
    document.title = TITLES[path] ?? 'Clovy'
  }, [path])

  return (
    <>
      <SiteHeader />
      {path === '/' ? <Landing /> : path === '/privacy' ? <Privacy /> : path === '/contact' ? <Contact /> : <NotFound />}
      <SiteFooter />
    </>
  )
}
