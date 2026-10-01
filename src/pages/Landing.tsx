import { Fragment } from 'react'
import { AppStoreBadge } from '../components/AppStoreBadge'
import { PhoneMockup } from '../components/PhoneMockup'
import { MotionRoot, Reveal } from '../components/Reveal'
import { useLang } from '../lang'

const STEP_PHONES = [
  { slot: 'mock-write', src: '/assets/mock-write.png' },
  { slot: 'mock-discover', src: '/assets/mock-discover.png' },
  { slot: 'mock-save-step', src: '/assets/mock-save-step.png' },
] as const

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
    <MotionRoot>
    <main>
      <section className="hero">
        <div className="hero__inner">
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
            <img src="/assets/hero-clovy.png" alt={t.a11y.heroArt} />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band__card save__card">
          <Reveal className="save__copy">
            <h2 className="section-title">{t.save.title}</h2>
            <p className="section-body">
              <Lines lines={t.save.body} />
            </p>
          </Reveal>
          <Reveal className="mock-slot mock-slot--save" delay={0.22}>
            <PhoneMockup src="/assets/mock-save.png" alt={t.a11y.savePhone} />
          </Reveal>
        </div>
      </section>

      <section className="features" id="features">
        <div className="features__inner">
          <Reveal as="h2" className="section-title">
            <Lines lines={t.features.title} />
          </Reveal>
          <Reveal as="p" className="section-body features__lede" delay={0.18}>
            {t.features.lede}
          </Reveal>
          <ol className="steps">
            {t.features.steps.map((step, index) => (
              <Reveal as="li" className="step" key={step.number} delay={0.12 + index * 0.18}>
                <div className="step__head">
                  <span className="step__number">{step.number}</span>
                  <p className="step__title">{step.title}</p>
                  <p className="step__body">
                    <Lines lines={step.body} />
                  </p>
                </div>
                <div className="mock-slot mock-slot--step" data-slot={STEP_PHONES[index].slot}>
                  <PhoneMockup src={STEP_PHONES[index].src} alt={t.a11y.stepPhones[index]} />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="band__card grow__card">
          <Reveal className="grow__copy">
            <h2 className="section-title">{t.grow.title}</h2>
            <p className="section-body">
              <Lines lines={t.grow.body} />
            </p>
          </Reveal>
          <Reveal className="grow__art" delay={0.22}>
            <img className="grow__sprout" src="/assets/clover-seed.png" alt={t.a11y.growSeed} />
            <img className="grow__arrow" src="/assets/arrow-right.svg" alt="" aria-hidden="true" />
            <span className="grow__clovy">
              <img src="/assets/clovy-gray.png" alt={t.a11y.growClovy} />
              <img className="grow__question" src="/assets/question-mark.svg" alt="" aria-hidden="true" />
            </span>
          </Reveal>
        </div>
      </section>

      <section className="closing">
        <img
          className="closing__accent closing__accent--left"
          src="/assets/clover-accent-left.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="closing__accent closing__accent--right"
          src="/assets/clover-accent-right.png"
          alt=""
          aria-hidden="true"
        />
        <Reveal className="closing__inner">
          <h2 className="closing__title">
            {t.closing.title[0]}
            <br />
            {t.closing.title[1]}
          </h2>
          <AppStoreBadge className="closing__cta" />
        </Reveal>
      </section>
    </main>
    </MotionRoot>
  )
}
