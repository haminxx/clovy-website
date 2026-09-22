import { useLang } from '../lang'
import { APP_STORE_URL } from '../site'

/* Official Apple badge artwork, downloaded unmodified from the Apple Services
   Marketing Tool linked in developer.apple.com/app-store/marketing/guidelines.
   Apple ships the localised "Download on the" wording, so the artwork is swapped
   with the site language rather than being re-drawn. Only the rendered height is
   set — colour, proportions and the surrounding rule belong to the artwork. */
const BADGE: Record<string, string> = {
  en: '/assets/app-store-badge-en.svg',
  ko: '/assets/app-store-badge-ko.svg',
}

export function AppStoreBadge({ className }: { className?: string }) {
  const { lang, t } = useLang()

  return (
    <a
      className={className ? `store-badge ${className}` : 'store-badge'}
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
    >
      <img className="store-badge__art" src={BADGE[lang]} alt={t.a11y.appStore} />
    </a>
  )
}
