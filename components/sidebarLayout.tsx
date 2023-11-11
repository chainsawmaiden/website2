import React from 'react'
import ProjectBar from './projectBar'
import Header from './header'
import Footer from './footer'
import Lnk from './lnk'
import Link from 'next/link'

import { projectsData } from '@/lib/data'

export default function SidebarLayout({children, exclude} : {children: React.ReactNode, exclude?: number}) {
  return (
    
    <main className="flex flex-col min-h-full h-auto">
        <Header />
        <section className='flex flex-col sm:grid grid-cols-[12rem_1fr] my-2 gap-x-4 '>
          <article className='h-min sm:flex-col sm:flex hidden  w-full mt-4 rounded-md sm:mt-0 sticky self-start top-[3.25rem] sm:h-[calc(100vh-6rem)] min-h-full overflow-scroll scrollbar-hide pr-4 opacity-25 transition duration-500 hover:opacity-100'>
              <ProjectBar exclude={exclude} />
            
            </article>
            {children}
            <div className='grow'></div>
            
        </section>
        <Footer />
    </main>
    
  )
}
