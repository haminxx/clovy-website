type PhoneMockupProps = {
  src: string
  alt: string
  /** Top of an iPhone, cut off where the card ends. */
  shell?: boolean
}

export function PhoneMockup({ src, alt, shell = false }: PhoneMockupProps) {
  if (shell) {
    return (
      <div className="phone phone--shell">
        <div className="phone__screen">
          <span className="phone__island" aria-hidden="true" />
          <img className="phone__ui" src={src} alt={alt} />
        </div>
      </div>
    )
  }

  return (
    <div className="phone phone--plain">
      <img className="phone__ui" src={src} alt={alt} />
    </div>
  )
}
