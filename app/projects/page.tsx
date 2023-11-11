import React from 'react'
import { projectsData } from '@/lib/data'
import Lnk from '@/components/lnk'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects - Aditya Das',
    description: 'Who is Aditya?',
    
}

export default function Page() {
  return (
    <>
        
        <ol className='list-decimal list-inside'>
        <p className='mb-2'>All of the projects I'm confident enough to share in a digital space.</p>
            {projectsData.map((project, i) => project.category != 'upcoming' && <li key={i}><Lnk href={project.page}>{project.title}</Lnk></li>)}
        
        <p className='my-2'>Plus some upcoming projects. Stay tuned!</p>

            {projectsData.map((project, i) => project.category == 'upcoming' && <li key={i}><Lnk href={project.page}>{project.title}</Lnk></li>)}
        </ol>
    </>
  )
}
