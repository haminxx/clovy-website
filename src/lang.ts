import { createContext, useContext } from 'react'
import { LANGS } from './copy'
import type { Copy, Lang } from './copy'

export const STORAGE_KEY = 'clovy.lang'
export const DEFAULT_LANG: Lang = 'en'

export function isLang(value: unknown): value is Lang {
  return LANGS.includes(value as Lang)
}

export function storedLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    /* Safari private mode and blocked storage both throw — fall back to default. */
  }
  return DEFAULT_LANG
}

export type LangValue = {
  lang: Lang
  setLang: (next: Lang) => void
  toggle: () => void
  t: Copy
}

export const LangContext = createContext<LangValue | null>(null)

export function useLang() {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang must be used inside <LangProvider>')
  return value
}
