/* Thick iPhone bezel and Dynamic Island. The card crops the bottom. No hover motion. */
export function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone">
      <div className="phone__screen">
        <span className="phone__island" aria-hidden="true" />
        <img className="phone__ui" src={src} alt={alt} />
      </div>
    </div>
  )
}
