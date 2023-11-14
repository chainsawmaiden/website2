import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'

import Gallery from '@/components/gallery'
import ImageModal from '@/components/imageModal'

export const metadata: Metadata = {
  title: 'Art - Aditya Das',
  description: 'An collection of art made by Aditya Das.'
}

import figureStudy from '@/public/art/figure-study.jpeg'
import council from '@/public/art/council.png'
import entangled from '@/public/art/entangled.jpg'
import flowerBoy from '@/public/art/flower-boy.jpeg'
import mushroomForest from '@/public/art/mushroom-forest.jpg'
import newReligion from '@/public/art/new-religion.jpg'
import sculptor from '@/public/art/sculptor.png'
import youngAndBeautiful from '@/public/art/young-and-beautiful.jpeg'

const gallery0 = [council, youngAndBeautiful, mushroomForest, newReligion, sculptor, flowerBoy, youngAndBeautiful, entangled,] as const;

export default function Page() {
  return (
    
    <>
      
      <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-2'>Art Portfolio</h1>
      <p className='w-full'>A selection of award-winning paintings, drawings, and illustrations I have made in the past years. Enjoy!</p>

      <hr className='border-solid'></hr>

      <div className='columns-1 sm:columns-2 md:columns-3 gap-x-2'>
        {gallery0.map((img, i) => <ImageModal key={i} src={img} rounded={true} maxh='mb-2'/>)}
      </div>

      <hr className='border-solid '></hr>
      <Lnk href='/'>All Projects →</Lnk>
      <hr className='border-solid '></hr>
      
    </>
  )
}
