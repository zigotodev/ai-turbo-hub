export default function Loading() {

  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[999]">

      <div className="flex flex-col items-center">

        {/* SPINNER */}
        <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />

        <h2 className="text-white text-2xl font-bold mt-8">
          AI Turbo Hub
        </h2>

        <p className="text-gray-400 mt-3">
          Carregando experiência...
        </p>

      </div>

    </div>
  )
}