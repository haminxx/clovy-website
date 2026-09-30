import { useLang } from '../lang'
import { CONTACT_GMAIL, PRIVACY_URL } from '../site'
import { Link } from './Link'
import { Reveal } from './Reveal'

export function SiteFooter() {
  const { t } = useLang()

  return (
    <Reveal as="footer" className="site-footer" y={18}>
      <div className="shell site-footer__inner">
        <Link to="/" className="wordmark wordmark--sm" aria-label={t.a11y.home}>
          Clovy
        </Link>
        <div className="site-footer__links">
          <a href={PRIVACY_URL} target="_blank" rel="noreferrer">
            {t.footer.privacy}
          </a>
          <a href={CONTACT_GMAIL} target="_blank" rel="noreferrer">
            {t.footer.contact}
          </a>
          <span className="site-footer__copy">{t.footer.copyright}</span>
        </div>
      </div>
    </Reveal>
  )
}
