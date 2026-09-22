import { useLang } from '../lang'
import { CONTACT_MAILTO, PRIVACY_URL } from '../site'
import { Link } from './Link'

export function SiteFooter() {
  const { t } = useLang()

  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <Link to="/" className="wordmark wordmark--sm" aria-label={t.a11y.home}>
          Clovy
        </Link>
        <div className="site-footer__links">
          <a href={PRIVACY_URL} target="_blank" rel="noreferrer">
            {t.footer.privacy}
          </a>
          <a href={CONTACT_MAILTO}>{t.footer.contact}</a>
          <span className="site-footer__copy">{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  )
}
