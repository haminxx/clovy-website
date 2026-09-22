import { CONTACT_EMAIL } from '../site'

export function Contact() {
  return (
    <main className="doc">
      <div className="shell doc__inner">
        <h1 className="doc__title">Contact</h1>
        <p className="doc__meta">We read everything that comes in.</p>

        <p>
          Questions, bug reports, feature wishes, or a moment you want to tell us about — send them
          to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <p className="doc__cta">
          <a className="btn btn--green btn--cta" href={`mailto:${CONTACT_EMAIL}`}>
            Email the Clovy team
          </a>
        </p>
      </div>
    </main>
  )
}
