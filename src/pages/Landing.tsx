import { Fragment } from 'react'
import { AppStoreBadge } from '../components/AppStoreBadge'
import { PhoneFrame } from '../components/PhoneFrame'
import { useLang } from '../lang'

const STEP_VARIANTS = ['write', 'discover', 'saveStep'] as const

/* Renders one array entry per artboard line. The break is hidden under 768px, so
   it is preceded by a space that keeps the words apart once the copy reflows. */
function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && (
            <>
              {' '}
              <br className="br-d" />
            </>
          )}
          {line}
        </Fragment>
      ))}
    </>
  )
}

export function Landing() {
  const { t } = useLang()

  return (
    <main>
      <section className="hero">
        <div className="shell hero__inner">
          <div className="hero__copy">
            <h1 className="hero__title">
              <Lines lines={t.hero.title} />
            </h1>
            <p className="hero__lede">
              <Lines lines={t.hero.lede} />
            </p>
            <AppStoreBadge className="hero__cta" />
          </div>
          <div className="hero__art">
            <PhoneFrame variant="hero" alt={t.a11y.heroPhone} />
          </div>
        </div>
      </section>

      <section className="save">
        <div className="shell save__inner">
          <div className="save__copy">
            <h2 className="section-title">{t.save.title}</h2>
            <p className="section-body">
              <Lines lines={t.save.body} />
            </p>
          </div>
          <div className="save__art">
            <PhoneFrame variant="save" alt={t.a11y.savePhone} />
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="shell features__inner">
          <h2 className="section-title">
            <Lines lines={t.features.title} />
          </h2>
          <p className="section-body features__lede">{t.features.lede}</p>
          <ol className="steps">
            {t.features.steps.map((step, index) => (
              <li className="step" key={step.number}>
                <p className="step__heading">
                  <span className="step__number">{step.number}</span>
                  <span className="step__title">{step.title}</span>
                </p>
                <p className="step__body">
                  <Lines lines={step.body} />
                </p>
                <div className="step__art">
                  <PhoneFrame variant={STEP_VARIANTS[index]} alt={t.a11y.stepPhones[index]} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grow">
        <div className="shell grow__inner">
          <div className="grow__copy">
            <h2 className="section-title">{t.grow.title}</h2>
            <p className="section-body">
              <Lines lines={t.grow.body} />
            </p>
          </div>
          <div className="grow__art">
            <img className="grow__seed" src="/assets/clover-seed.png" alt={t.a11y.growSeed} />
            <img className="grow__line" src="/assets/arrow-line.svg" alt="" aria-hidden="true" />
            <span className="grow__head">
              <img src="/assets/arrow-head.svg" alt="" aria-hidden="true" />
            </span>
            <span className="grow__clovy">
              <img src="/assets/clovy-gray.png" alt={t.a11y.growClovy} />
              <img className="grow__question" src="/assets/question.svg" alt="" aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="shell closing__inner">
          <h2 className="closing__title">
            <Lines lines={t.closing.title} />
          </h2>
          <AppStoreBadge className="closing__cta" />
        </div>
      </section>
    </main>
  )
}
