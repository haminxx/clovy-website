import { useLang } from '../lang'
import { APP_STORE_URL } from '../site'

/* Figma draws this as a green pill (467×71, radius 35.5), not Apple's badge
   artwork. The glyph is the Apple logo from that frame. */
export function AppStoreBadge({ className }: { className?: string }) {
  const { t } = useLang()

  return (
    <a
      className={className ? `store-cta ${className}` : 'store-cta'}
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
    >
      <img className="store-cta__logo" src="/assets/apple-logo.svg" alt="" aria-hidden="true" />
      <span>{t.store.cta}</span>
    </a>
  )
}
