import { useLang } from '../lang'
import { usePath } from '../router'
import { APP_STORE_URL } from '../site'
import { LanguageToggle } from './LanguageToggle'
import { Link } from './Link'

export function SiteHeader() {
  const path = usePath()
  const { t } = useLang()
  const onLanding = path === '/'

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link to="/" className="wordmark wordmark--lg" aria-label={t.a11y.home}>
          Clovy
        </Link>
        <nav className="site-nav">
          <div className="site-nav__group">
            <LanguageToggle />
            <a
              className="site-nav__link"
              href="/#features"
              onClick={(event) => {
                if (!onLanding) return
                event.preventDefault()
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                window.history.replaceState({}, '', '/#features')
              }}
            >
              {t.nav.about}
            </a>
          </div>
          <a className="btn btn--nav" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            {t.nav.download}
          </a>
        </nav>
      </div>
    </header>
  )
}
