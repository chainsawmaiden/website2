import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'

import Gallery from '@/components/gallery'
import ImageModal from '@/components/imageModal'

export const metadata: Metadata = {
  title: 'Design - Aditya Das',
  description: 'An collection of designs made by Aditya Das.'
}

import hobbesAndSushi from '@/public/design/hobbes-red.png'
import blenderWorkshop from '@/public/design/blender-workshop.png'
import popcorn from '@/public/design/layout-2.png'
import criterion from '@/public/design/criterion-1.png'
import bac from '@/public/design/bac-hover.gif'
import popcorn2 from '@/public/design/exterior-front.png'

const gallery0 = [hobbesAndSushi, popcorn2] as const;
const gallery1 = [blenderWorkshop, criterion, bac] as const;
const gallery2 = [popcorn] as const;

export default function Page() {
  return (
    
    <>
      
      <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-2'>Misc. Design</h1>
      <p className='w-full'>Some random posters, posts, and other things that I've made. Enjoy!</p>

      <hr className='border-solid'></hr>

      <section className='grid grid-cols-1 sm:grid-cols-3 gap-x-2 rounded-md'>
        <div className='flex flex-col gap-y-2'>
          {gallery0.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh=''/>)}
        </div>
        <div className='flex flex-col gap-y-2'>
          {gallery1.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh=''/>)}
        </div>
        <div className='flex flex-col gap-y-2'>
          {gallery2.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh=''/>)}
        </div>
      </section>

      <hr className='border-solid '></hr>
      <Lnk href='/projects/stemchests'>Next Project →</Lnk>
      <hr className='border-solid '></hr>
      
    </>
  )
}
