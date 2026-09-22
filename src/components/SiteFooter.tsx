import { Link } from './Link'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <Link to="/" className="wordmark wordmark--sm">
          Clovy
        </Link>
        <div className="site-footer__links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
          <span className="site-footer__copy">© 2026 Clovy</span>
        </div>
      </div>
    </footer>
  )
}
