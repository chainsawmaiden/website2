
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Banner from '@/components/banner'
import HeaderSpacer from '@/components/headerSpacer'

export default function Home() {
  return (
    <main className="flex flex-col h-screen h-[calc(100dvh)]">
      
      <Header />
      <Hero />
      <Footer />

    </main>
  )
}
