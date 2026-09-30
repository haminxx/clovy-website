/* Rounded screen only. The screenshot is the UI; no hardware shell and no hover motion. */
export function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone">
      <img className="phone__screen" src={src} alt={alt} />
    </div>
  )
}
