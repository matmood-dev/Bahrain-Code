export function setDocumentDir(lang: string) {
  const isRTL = lang.startsWith('ar')
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  document.documentElement.lang = lang
  // tailwindcss-rtl makes `rtl:` and `ltr:` variants work when dir changes
}
