export default function BlogLoading() {

  return (
    <main className="min-h-screen bg-[#050816] text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="h-16 w-72 bg-white/5 rounded-2xl animate-pulse" />

        <div className="h-6 w-[500px] bg-white/5 rounded-xl animate-pulse mt-6" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {[1, 2, 3, 4, 5, 6].map((item) => (

            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >

              <div className="w-full h-56 bg-white/5 animate-pulse" />

              <div className="p-8">

                <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />

                <div className="h-8 w-full bg-white/5 rounded animate-pulse mt-6" />

                <div className="h-4 w-full bg-white/5 rounded animate-pulse mt-6" />

                <div className="h-4 w-2/3 bg-white/5 rounded animate-pulse mt-4" />

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  )
}