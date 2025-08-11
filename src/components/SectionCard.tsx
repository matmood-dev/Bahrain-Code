import { ArrowUpRight } from 'lucide-react'

export default function SectionCard({
  title, desc, href, icon
}: { title: string; desc: string; href?: string; icon?: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 hover:-translate-y-0.5 hover:shadow-lg transition">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
        {icon ?? <ArrowUpRight className="h-5 w-5" />}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-black/70 dark:text-white/70 line-clamp-3">{desc}</p>
      {href && (
        <a href={href} className="mt-4 inline-flex items-center gap-2 text-brand-700 dark:text-brand-300 hover:underline">
          Learn more <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}
