'use client'

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-12">

      <input
        type="text"
        placeholder="Buscar ferramentas de IA..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none text-lg"
      />

    </div>
  )
}