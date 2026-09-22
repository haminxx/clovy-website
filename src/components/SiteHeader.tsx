import { APP_STORE_URL } from '../site'
import { usePath } from '../router'
import { Link } from './Link'

export function SiteHeader() {
  const path = usePath()
  const onLanding = path === '/'

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link to="/" className="wordmark wordmark--lg">
          Clovy
        </Link>
        <nav className="site-nav">
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
            About
          </a>
          <a className="btn btn--nav" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            Download
          </a>
        </nav>
      </div>
    </header>
  )
}
