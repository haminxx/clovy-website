import { Link } from '../components/Link'
import { useLang } from '../lang'

export function NotFound() {
  const { t } = useLang()

  return (
    <main className="doc">
      <div className="shell doc__inner">
        <h1 className="doc__title">{t.notFound.title}</h1>
        <p>{t.notFound.body}</p>
        <p className="doc__cta">
          <Link className="btn btn--green btn--pill" to="/">
            {t.notFound.cta}
          </Link>
        </p>
      </div>
    </main>
  )
}
