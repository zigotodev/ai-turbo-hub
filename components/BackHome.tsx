import Link from 'next/link'

export default function BackHome() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition mb-10"
    >
      ← Voltar para Home
    </Link>
  )
}