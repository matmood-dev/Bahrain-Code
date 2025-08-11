import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function LangToggle() {
  const { i18n } = useTranslation()
  const isAr = i18n.language.startsWith('ar')
  const switchLang = () => i18n.changeLanguage(isAr ? 'en' : 'ar')

  return (
    <button
      onClick={switchLang}
      className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline">{isAr ? 'English' : 'العربية'}</span>
    </button>
  )
}
