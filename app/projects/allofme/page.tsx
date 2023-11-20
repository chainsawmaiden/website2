import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'

import Gallery from '@/components/gallery'
import ImageModal from '@/components/imageModal'

export const metadata: Metadata = {
  title: 'All Of Me, All Of You - Aditya Das',
  description: 'An art installation created by Aditya Das.'
}

const page = [
      
  <>
    <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-2'>All Of Me, All Of You</h1>
    <p>An art installation built in Dec 2022, during my senior year of high school. Special thanks to <Lnk href='https://www.shinehkim.com/'>Shineh Kim</Lnk>.</p>
  </>,

  <div className='w-auto aspect-video max-h-full mt-1.5'><iframe width="560" height="315" src="https://www.youtube.com/embed/7Z2KVbWiKxU?si=LWjsFpxoeyvdTGt8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen 
    className='w-full h-full rounded-md' />
  </div>,

  
  <Lnk href='/projects/art'>Next Project →</Lnk>,

  ] as React.ReactNode[];

  export default function Page() {
    return (
      page.map((element, id) => 
        <>
          {element}
          <hr className='border-solid' />
        </>)
    )
  }
