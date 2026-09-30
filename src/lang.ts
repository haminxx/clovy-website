import { createContext, useContext } from 'react'
import type { Copy, Lang } from './copy'

export type LangValue = {
  lang: Lang
  t: Copy
}

export const LangContext = createContext<LangValue | null>(null)

export function useLang() {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang must be used inside <LangProvider>')
  return value
}
