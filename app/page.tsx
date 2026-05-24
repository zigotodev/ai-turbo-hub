
import Hero from '@/sections/Hero'
import Trending from '@/sections/Trending'
import FeaturedTools from '@/sections/FeaturedTools'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <main className="relative bg-[#050816] overflow-hidden">

      {/* BACKGROUND GLOWS */}

      <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full" />

      <div className="absolute top-[600px] right-[-200px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

      {/* CONTENT */}

      <div className="relative z-10">


        <Hero />

        <Trending />

        <FeaturedTools />

        <Footer />

      </div>

    </main>
  )
}