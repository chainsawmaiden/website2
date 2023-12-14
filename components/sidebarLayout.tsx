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
        <section className='flex flex-col-reverse sm:grid grid-cols-[9.25rem_1fr] my-2 gap-x-4 sm:gap-x-16'>
          <aside className='h-min sm:flex-col sm:flex hidden w-full mt-4 sm:mt-0 sticky self-start top-[3.25rem] sm:h-[calc(100vh-6rem)] min-h-full overflow-auto scrollbar-hide -ml-1 sm:opacity-25 transition duration-500 hover:opacity-100'>
            <ProjectBar exclude={exclude} />
            
          </aside>
          {children}
          <div className='grow'></div>
            
        </section>
        <Footer />
    </main>
    
  )
}
