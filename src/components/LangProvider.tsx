import { useMemo } from 'react'
import type { ReactNode } from 'react'
import { COPY } from '../copy'
import { LangContext } from '../lang'
import type { LangValue } from '../lang'

/* English only for now. The Korean copy stays in copy.ts, but nothing switches to it. */
export function LangProvider({ children }: { children: ReactNode }) {
  const value = useMemo<LangValue>(
    () => ({
      lang: 'en',
      t: COPY.en,
    }),
    [],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
