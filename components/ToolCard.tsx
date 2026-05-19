import Link from 'next/link'

type Props = {
  title: string
  description: string
  image: string
  category: string
  slug: string
}

export default function ToolCard({
  title,
  description,
  image,
  category,
  slug,
}: Props) {
  return (
    <Link href={`/tools/${slug}`}>

      <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/40 hover:bg-white/[0.05] transition duration-300 cursor-pointer">

        <div className="overflow-hidden">

          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover hover:scale-105 transition duration-700"
          />

        </div>

        <div className="p-6">

          <span className="text-indigo-400 text-sm">
            {category}
          </span>

          <h3 className="text-2xl font-bold text-white mt-3">
            {title}
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            {description}
          </p>

          <button className="mt-6 bg-indigo-600 hover:bg-indigo-500 transition px-5 py-3 rounded-2xl text-white font-medium">
            Ver ferramenta
          </button>

        </div>

      </div>

    </Link>
  )
}