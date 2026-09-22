import { useEffect } from 'react'
import { LangProvider } from './components/LangProvider'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { useLang } from './lang'
import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'
import { usePath } from './router'
import { CONTACT_MAILTO, PRIVACY_URL } from './site'

/* Privacy and contact used to be pages on this site; both now live off-site, so
   the old paths hand off instead of 404ing. */
const MOVED: Record<string, string> = {
  '/privacy': PRIVACY_URL,
  '/contact': CONTACT_MAILTO,
}

function Site() {
  const path = usePath()
  const { t } = useLang()
  const moved = MOVED[path]

  useEffect(() => {
    document.title = t.documentTitle
  }, [t])

  useEffect(() => {
    if (moved) window.location.replace(moved)
  }, [moved])

  return (
    <>
      <SiteHeader />
      {path === '/' || moved ? <Landing /> : <NotFound />}
      <SiteFooter />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  )
}
