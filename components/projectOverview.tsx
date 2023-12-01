"use client"

import React from 'react'
import Accent from './accent';
import Image from 'next/image';
    
type Props = {
  children: React.ReactNode, 
  title: string, 
  tagline: string, 
  timeline: string, 
  team: string, 
  role: string, 
  tools: string, 
  skills: string,
  img?: any};

export default function ProjectOverview({children, title, tagline, timeline, team, role, tools, skills, img}: Props) {
  return (
    <>
      {img && <Image src={img} alt='project image' className='rounded-md h-auto w-full mb-2'/>}
      <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-3'>{title}</h1>
      <Accent>{tagline}</Accent>
      

      <section className='grid grid-cols-1 sm:grid-cols-[3fr_1fr] gap-x-10 gap-y-2'>
        <hr className='border-solid -mt-1 col-span-full'></hr>
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
