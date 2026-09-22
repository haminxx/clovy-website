import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { COPY } from '../copy'
import type { Lang } from '../copy'
import { LangContext, STORAGE_KEY, storedLang } from '../lang'
import type { LangValue } from '../lang'

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(storedLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* Preference simply does not persist when storage is unavailable. */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LangValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === 'en' ? 'ko' : 'en'),
      t: COPY[lang],
    }),
    [lang, setLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
