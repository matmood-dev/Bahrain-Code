interface SectionCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function SectionCard({ title, desc, icon }: SectionCardProps) {
  return (
    <div className="flex flex-col items-center text-center h-full p-6 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 text-brand-500">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[rgb(var(--muted))]">{desc}</p>
    </div>
  );
}
