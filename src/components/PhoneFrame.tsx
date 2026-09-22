type Variant = 'hero' | 'save' | 'write' | 'discover' | 'saveStep'

const SCREEN: Record<Exclude<Variant, 'write'>, string> = {
  hero: 'hero-home.png',
  save: 'save-calendar.png',
  discover: 'discover-screen.png',
  saveStep: 'hero-home.png',
}

const CLOVER_MARKS = ['clover-mark-1.svg', 'clover-mark-2.svg', 'clover-mark-3.svg']

export function PhoneFrame({ variant, alt }: { variant: Variant; alt: string }) {
  return (
    <div className={`pf pf--${variant}`}>
      <div className="pf__screen">
        {variant === 'write' ? (
          <div className="pf__window">
            <div className="pf__slice pf__slice--top">
              <img className="pf__shot" src="/assets/write-screen.png" alt={alt} />
            </div>
            <div className="pf__slice pf__slice--bottom">
              <img className="pf__shot" src="/assets/write-screen.png" alt="" aria-hidden="true" />
            </div>
            <span className="pf__cover" />
          </div>
        ) : (
          <div className="pf__window">
            <img className="pf__shot" src={`/assets/${SCREEN[variant]}`} alt={alt} />
            {variant === 'saveStep' &&
              CLOVER_MARKS.map((mark, index) => (
                <img
                  key={mark}
                  className={`pf__mark pf__mark--${index + 1}`}
                  src={`/assets/${mark}`}
                  alt=""
                  aria-hidden="true"
                />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
