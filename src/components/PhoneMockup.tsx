/* Static iPhone shell. No carousel and no spin — a small lift on hover only. */
export function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone">
      <div className="phone__bezel">
        <img className="phone__screen" src={src} alt={alt} />
        <span className="phone__island" aria-hidden="true" />
      </div>
    </div>
  )
}
