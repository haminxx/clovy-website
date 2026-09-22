import { PhoneFrame } from '../components/PhoneFrame'
import { APP_STORE_URL } from '../site'

const STEPS = [
  {
    number: '01',
    title: 'Write',
    body: ['Just write about your day.'],
    variant: 'write' as const,
    alt: 'Clovy journal entry screen asking “How was your day?”',
  },
  {
    number: '02',
    title: 'Discover',
    body: ['Clovy helps you discover a', 'moment worth keeping.'],
    variant: 'discover' as const,
    alt: 'Clovy highlighting a moment worth keeping inside a journal entry',
  },
  {
    number: '03',
    title: 'Save',
    body: ['Save it as a clover.'],
    variant: 'saveStep' as const,
    alt: 'Clovy home screen with saved clovers',
  },
]

export function Landing() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero__inner">
          <div className="hero__copy">
            <h1 className="hero__title">
              Find the little <br className="br-d" />
              moments <br className="br-d" />
              worth keeping.
            </h1>
            <p className="hero__lede">
              Keep the happy and lucky moments <br className="br-d" />
              from your day – one little clover at a time.
            </p>
            <a
              className="btn btn--green btn--cta"
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Download on the App Store
            </a>
          </div>
          <div className="hero__art">
            <PhoneFrame variant="hero" alt="Clovy home screen with today’s clovers" />
          </div>
        </div>
      </section>

      <section className="save">
        <div className="shell save__inner">
          <div className="save__copy">
            <h2 className="section-title">Save your moments</h2>
            <p className="section-body">
              Write down the happy and lucky moments from your day. <br className="br-d" />
              Keep the little moments you want to remember.
            </p>
          </div>
          <div className="save__art">
            <PhoneFrame variant="save" alt="Clovy daily list of saved moments" />
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="shell features__inner">
          <h2 className="section-title">
            Can't think of a moment? <br className="br-d" />
            Tell Clovy about your day.
          </h2>
          <p className="section-body features__lede">
            Write about your day, and Clovy can help you notice happy and lucky moments.
          </p>
          <ol className="steps">
            {STEPS.map((step) => (
              <li className="step" key={step.number}>
                <p className="step__heading">
                  <span className="step__number">{step.number}</span>
                  <span className="step__title">{step.title}</span>
                </p>
                <p className="step__body">
                  {step.body.map((line, index) => (
                    <span key={line}>
                      {index > 0 && <> <br className="br-d" /></>}
                      {line}
                    </span>
                  ))}
                </p>
                <div className="step__art">
                  <PhoneFrame variant={step.variant} alt={step.alt} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grow">
        <div className="shell grow__inner">
          <div className="grow__copy">
            <h2 className="section-title">Grow with Clovy</h2>
            <p className="section-body">
              Collect clovers from your daily moments to help Clovy grow. <br className="br-d" />
              The more moments you keep, the more Clovy grows with you.
            </p>
          </div>
          <div className="grow__art">
            <img className="grow__seed" src="/assets/clover-seed.png" alt="A clover sprouting a seed" />
            <img className="grow__line" src="/assets/arrow-line.svg" alt="" aria-hidden="true" />
            <span className="grow__head">
              <img src="/assets/arrow-head.svg" alt="" aria-hidden="true" />
            </span>
            <span className="grow__clovy">
              <img src="/assets/clovy-gray.png" alt="A grown Clovy waiting to be revealed" />
              <img className="grow__question" src="/assets/question.svg" alt="" aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="shell closing__inner">
          <h2 className="closing__title">
            There may be more good <br className="br-d" />
            in your day than you noticed.
          </h2>
          <a
            className="btn btn--black btn--cta"
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Download on the App Store
          </a>
        </div>
      </section>
    </main>
  )
}
