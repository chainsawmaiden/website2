"use client"

import React from 'react'
    
type Props = {children: React.ReactNode, timeline: string, team: string, role: string, tools: string, skills: string};

export default function ProjectOverview({children, timeline, team, role, tools, skills}: Props) {
  return (
    <>
      <section className='grid grid-cols-1 sm:grid-cols-[3fr_1fr] gap-x-10 gap-y-2'>
        <div className='flex flex-col gap-y-2'>
            {children}
        </div>
        <hr className='block sm:hidden border-solid'></hr>
        <div className='flex flex-col gap-y-2'>
          <p className='w-full'><span className='lf'>TIMELINE: </span>{timeline}</p>
          <hr className='border-solid'></hr>
          <p className='w-full'><span className='lf'>TEAM: </span>{team}</p>
          <hr className='border-solid'></hr>
          <p className='w-full'><span className='lf'>ROLE: </span>{role}</p>
          <hr className='border-solid'></hr>
          <p className='w-full'><span className='lf'>TOOLS: </span>{tools}</p>
          <hr className='border-solid'></hr>
          <p className='w-full'><span className='lf'>SKILLS: </span>{skills}</p>
        </div>
      </section>
    </>
  )
}
