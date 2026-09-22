import { CONTACT_EMAIL } from '../site'

export function Privacy() {
  return (
    <main className="doc">
      <div className="shell doc__inner">
        <h1 className="doc__title">Privacy Policy</h1>
        <p className="doc__meta">Last updated: January 2026</p>

        <h2>The short version</h2>
        <p>
          Clovy is a private journal. The moments you write are yours. We collect as little as we
          can, we do not sell your data, and we do not show you ads.
        </p>

        <h2>What we store</h2>
        <p>
          Your moments, clovers and daily entries are stored so that they can sync to your account
          and be restored when you reinstall the app. We also store the basic account information
          you give us when you sign in, such as your name and email address.
        </p>

        <h2>How your writing is used</h2>
        <p>
          When you ask Clovy to find moments in something you wrote, that text is sent to our
          processing service so Clovy can suggest the happy and lucky moments it notices. It is used
          to generate your suggestions and is not used to advertise to you.
        </p>

        <h2>What we never do</h2>
        <p>
          We never sell your personal information, and we never share the content of your journal
          with third parties for marketing.
        </p>

        <h2>Your choices</h2>
        <p>
          You can delete any moment from inside the app at any time. You can also ask us to delete
          your account and everything associated with it by emailing{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Questions</h2>
        <p>
          If anything here is unclear, write to us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will get back to you.
        </p>
      </div>
    </main>
  )
}
