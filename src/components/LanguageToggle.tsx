import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Lang } from '../copy'
import { useLang } from '../lang'

const ORDER: { code: Lang; label: string }[] = [
  { code: 'ko', label: 'KR' },
  { code: 'en', label: 'EN' },
]

/* Deliberately text-only: an icon here would read as a dark-mode switch. Inter is
   a variable font, so the weight change tweens rather than snapping. */
export function LanguageToggle() {
  const { lang, toggle, t } = useLang()
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 460, damping: 34 }

  return (
    <button className="lang-toggle" type="button" aria-label={t.a11y.language} onClick={toggle}>
      {ORDER.map(({ code, label }, index) => {
        const active = code === lang
        return (
          <Fragment key={code}>
            {index > 0 && (
              <span className="lang-toggle__sep" aria-hidden="true">
                |
              </span>
            )}
            {/* data-label reserves the bold width so emphasis never reflows the row. */}
            <span className="lang-toggle__slot" data-label={label}>
              <motion.span
                className="lang-toggle__label"
                lang={code}
                animate={{ opacity: active ? 1 : 0.4, fontWeight: active ? 700 : 400 }}
                transition={transition}
              >
                {label}
              </motion.span>
              {active && (
                <motion.span
                  className="lang-toggle__underline"
                  layoutId="lang-toggle-underline"
                  transition={transition}
                />
              )}
            </span>
          </Fragment>
        )
      })}
    </button>
  )
}
