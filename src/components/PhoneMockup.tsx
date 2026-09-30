/* iPhone 15 shell: bezel, Dynamic Island, and side buttons. No carousel. */
export function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone">
      <span className="phone__key phone__key--silent" aria-hidden="true" />
      <span className="phone__key phone__key--up" aria-hidden="true" />
      <span className="phone__key phone__key--down" aria-hidden="true" />
      <span className="phone__key phone__key--power" aria-hidden="true" />
      <div className="phone__shell">
        <span className="phone__island" aria-hidden="true" />
        <div className="phone__glass">
          <img className="phone__screen" src={src} alt={alt} />
        </div>
      </div>
    </div>
  )
}
