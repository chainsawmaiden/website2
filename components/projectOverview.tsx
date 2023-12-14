"use client"

import React from 'react'
import Accent from './accent';
import ImageModal from './imageModal';
import Break from './break';

    
type Props = {
  children: React.ReactNode, 
  title: string, 
  tagline: string, 
  timeline: string, 
  team: string, 
  role: string, 
  tools: string, 
  skills: string,
  img?: any,
  cover?: boolean,};

export default function ProjectOverview({children, title, tagline, timeline, team, role, tools, skills, img, cover}: Props) {
  return (
    <>
      {img && 
        <>
          <div className={`rounded-md w-full max-h-[80vh] ${!cover && 'flex flex-row justify-center bg-primary-0 xl:py-4'}`}>
            <ImageModal src={img} rounded={true} maxh={`${cover ? 'object-cover h-full w-full' : 'h-full w-auto'} `}/>
            
          </div>
          <hr className='border-none -mt-2' />
          <Break />
        </>
      }

      <section className='grid grid-cols-1 sm:grid-cols-[3fr_1fr] gap-x-10 gap-y-2'>
      
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-3'>{title}</h1>
          <Accent>{tagline}</Accent>
          <Break />
            {children}
        </div>
        <hr className='block sm:hidden border-solid'></hr>
        <div className='flex flex-col gap-y-2 self-end'>
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
