/* Rounded screen from the Figma mock. The frame is the border; the shot already includes the UI. */
export function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone">
      <img className="phone__ui" src={src} alt={alt} />
    </div>
  )
}
