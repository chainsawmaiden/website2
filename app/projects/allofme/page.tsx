import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'
import Break from '@/components/break';

export const metadata: Metadata = {
  title: 'All Of Me, All Of You - Aditya Das',
  description: 'An art installation created by Aditya Das.'
}

export default function Page() {
  return (
    <>
      <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-2'>All Of Me, All Of You</h1>
      <p>An art installation built in Dec 2022, during my senior year of high school. Special thanks to <Lnk href='https://www.shinehkim.com/'>Shineh Kim</Lnk>.</p>

      <Break />

      <div className='w-auto aspect-video max-h-full my-1.5'><iframe width="560" height="315" src="https://www.youtube.com/embed/7Z2KVbWiKxU?si=LWjsFpxoeyvdTGt8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen 
        className='w-full h-full rounded-md' />
      </div>

      <Break />

      <Lnk href='/projects/art'>Next Project →</Lnk>

      <Break />
    </>
  )
}