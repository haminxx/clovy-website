export const LANGS = ['en', 'ko'] as const
export type Lang = (typeof LANGS)[number]

/* Multi-line strings are authored as one array entry per desktop line; the
   breaks are dropped below 768px where the copy reflows on its own. */
export type Copy = {
  documentTitle: string
  nav: { about: string; download: string }
  hero: { title: string[]; lede: string[] }
  save: { title: string; body: string[] }
  features: {
    title: string[]
    lede: string
    steps: { number: string; title: string; body: string[] }[]
  }
  grow: { title: string; body: string[] }
  closing: { title: string[] }
  notFound: { title: string; body: string; cta: string }
  footer: { privacy: string; contact: string; copyright: string }
  a11y: {
    language: string
    home: string
    appStore: string
    heroPhone: string
    savePhone: string
    stepPhones: string[]
    growSeed: string
    growClovy: string
  }
}

const EN: Copy = {
  documentTitle: 'Clovy — Find the little moments worth keeping.',
  nav: { about: 'About', download: 'Download' },
  hero: {
    title: ['Find the little', 'moments', 'worth keeping.'],
    lede: ['Keep the happy and lucky moments', 'from your day – one little clover at a time.'],
  },
  save: {
    title: 'Save your moments',
    body: [
      'Write down the happy and lucky moments from your day.',
      'Keep the little moments you want to remember.',
    ],
  },
  features: {
    title: ["Can't think of a moment?", 'Tell Clovy about your day.'],
    lede: 'Write about your day, and Clovy can help you notice happy and lucky moments.',
    steps: [
      { number: '01', title: 'Write', body: ['Just write about your day.'] },
      { number: '02', title: 'Discover', body: ['Clovy helps you discover a', 'moment worth keeping.'] },
      { number: '03', title: 'Save', body: ['Save it as a clover.'] },
    ],
  },
  grow: {
    title: 'Grow with Clovy',
    body: [
      'Collect clovers from your daily moments to help Clovy grow.',
      'The more moments you keep, the more Clovy grows with you.',
    ],
  },
  closing: { title: ['There may be more good', 'in your day than you noticed.'] },
  notFound: {
    title: 'Page not found',
    body: 'That page does not exist — but your moments are still safe.',
    cta: 'Back to Clovy',
  },
  footer: { privacy: 'Privacy Policy', contact: 'Contact', copyright: '© 2026 Clovy' },
  a11y: {
    language: 'Language, English',
    home: 'Clovy — home',
    appStore: 'Download Clovy on the App Store',
    heroPhone: 'Clovy home screen with today’s clovers',
    savePhone: 'Clovy daily list of saved moments',
    stepPhones: [
      'Clovy journal entry screen asking “How was your day?”',
      'Clovy highlighting a moment worth keeping inside a journal entry',
      'Clovy home screen with saved clovers',
    ],
    growSeed: 'A clover sprouting a seed',
    growClovy: 'A grown Clovy waiting to be revealed',
  },
}

const KO: Copy = {
  documentTitle: 'Clovy — 하루 속 작은 행운을 모아보세요.',
  nav: { about: '소개', download: '다운로드' },
  hero: {
    title: ['하루에 숨어 있는', '작은 행운을', '모아보세요.'],
    lede: ['오늘 하루의 기쁘고 운 좋았던 순간을', '작은 클로버 한 장으로 남겨보세요.'],
  },
  save: {
    title: '소중한 순간을 저장하세요',
    body: ['오늘 하루의 기쁘고 운 좋았던 순간을 적어보세요.', '기억하고 싶은 작은 순간을 그대로 간직하세요.'],
  },
  features: {
    title: ['떠오르는 순간이 없나요?', 'Clovy에게 오늘 하루를 들려주세요.'],
    lede: '하루 이야기를 적어두면, Clovy가 기쁘고 운 좋았던 순간을 찾아드려요.',
    steps: [
      { number: '01', title: '쓰기', body: ['오늘 하루를', '자유롭게 적어보세요.'] },
      { number: '02', title: '발견', body: ['Clovy가 간직할 만한', '순간을 찾아드려요.'] },
      { number: '03', title: '저장', body: ['클로버로 저장하세요.'] },
    ],
  },
  grow: {
    title: 'Clovy와 함께 자라요',
    body: ['매일 모은 클로버가 Clovy를 자라게 해요.', '순간을 많이 간직할수록 Clovy도 함께 자랍니다.'],
  },
  closing: { title: ['생각보다 오늘 하루에', '좋은 일이 더 많았을지도 몰라요.'] },
  notFound: {
    title: '페이지를 찾을 수 없어요',
    body: '없는 페이지예요 — 기록해 둔 순간은 그대로 안전합니다.',
    cta: 'Clovy로 돌아가기',
  },
  footer: {
    /* The privacy policy lives on Notion and is only published in English. */
    privacy: '개인정보 처리방침 (영문)',
    contact: '문의하기',
    copyright: '© 2026 Clovy',
  },
  a11y: {
    language: 'Language, Korean',
    home: 'Clovy — 홈',
    appStore: 'App Store에서 Clovy 다운로드',
    heroPhone: '오늘의 클로버가 보이는 Clovy 홈 화면',
    savePhone: '저장한 순간이 날짜별로 정리된 Clovy 화면',
    stepPhones: [
      '“오늘 하루는 어땠나요?”라고 묻는 Clovy 기록 화면',
      '기록 속에서 간직할 만한 순간을 찾아주는 Clovy 화면',
      '저장한 클로버가 보이는 Clovy 홈 화면',
    ],
    growSeed: '새싹이 돋은 클로버',
    growClovy: '아직 공개되지 않은, 다 자란 Clovy',
  },
}

export const COPY: Record<Lang, Copy> = { en: EN, ko: KO }
