import About from '@/components/about'
import Header from '@/components/header'
import Footer from '@/components/footer'

import type { Metadata } from 'next'
import ProjectBar from '@/components/projectBar'

export const metadata: Metadata = {
  title: 'About - Aditya Das',
  description: 'Who is Aditya?',
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-full  h-auto">
        <Header />
        <section className='flex flex-col-reverse md:grid grid-cols-[1fr_5fr] my-2 gap-x-6 '>
          <article className='h-min sm:flex-col flex w-full mt-4 sm:mt-0 sticky self-start top-[3.25rem] sm:h-[calc(100vh-6rem)] min-h-full overflow-auto scrollbar-hide -ml-1 sm:opacity-25 transition duration-500 hover:opacity-100'>
              <ProjectBar />
            
            </article>
            <About />
            <div className='grow'></div>
            
        </section>
        <div className='grow'></div>
        <Footer />
    </main>
  )
}
