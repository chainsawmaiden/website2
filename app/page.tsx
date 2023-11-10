
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-auto">
      
      <Header />
      <Hero />
      <div className='grow'></div>
      <Footer />

    </main>
  )
}
