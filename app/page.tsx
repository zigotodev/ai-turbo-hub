import Navbar from '@/components/navbar'
import Hero from '@/sections/Hero'
import Trending from '@/sections/Trending'
import FeaturedTools from '@/sections/FeaturedTools'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#050816] overflow-x-hidden">

      <Navbar />

      <Hero />

      <Trending />

      <FeaturedTools />

      <Footer />

    </main>
  )
}