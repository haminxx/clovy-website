import { Link } from '../components/Link'

export function NotFound() {
  return (
    <main className="doc">
      <div className="shell doc__inner">
        <h1 className="doc__title">Page not found</h1>
        <p>That page does not exist — but your moments are still safe.</p>
        <p className="doc__cta">
          <Link className="btn btn--green btn--cta" to="/">
            Back to Clovy
          </Link>
        </p>
      </div>
    </main>
  )
}
