"use client"

import React from 'react'
    
type Props = {
  children: React.ReactNode, 
  title: string, 
  tagline: string, 
  timeline: string, 
  team: string, 
  role: string, 
  tools: string, 
  skills: string};

export default function ProjectOverview({children, title, tagline, timeline, team, role, tools, skills}: Props) {
  return (
    <>
      <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-2'>{title}</h1>
      <h4 className='bt text-2xl text-primary-200 -my-1'>{tagline}</h4>
      <hr className='border-solid'></hr>
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
