import React from 'react'

import Image from 'next/image'
import { Metadata } from 'next'
import Lnk from '@/components/lnk'
import Link from 'next/link'

import stemchests from '@/public/stemchests.png'
import stemchestsLogo from '@/public/stemchests-logo.png'
import stemchestsReviews from '@/public/stemchest-reviews.png'
import stemchestsCart from '@/public/stemchests-cart.png'
import ImageModal from '@/components/imageModal'

import scwk6 from '@/public/stemchests-workshop6.jpg'

import instr1 from '@/public/stemchests-instruction/01.png'
import instr2 from '@/public/stemchests-instruction/02.png'
import instr3 from '@/public/stemchests-instruction/03.png'
import instr4 from '@/public/stemchests-instruction/04.png'
import instr5 from '@/public/stemchests-instruction/05.png'
import instr6 from '@/public/stemchests-instruction/06.png'
import instr7 from '@/public/stemchests-instruction/07.png'
import instr8 from '@/public/stemchests-instruction/08.png'
import instr9 from '@/public/stemchests-instruction/09.png'
import instr10 from '@/public/stemchests-instruction/10.png'
import instr11 from '@/public/stemchests-instruction/11.png'
import instr12 from '@/public/stemchests-instruction/12.png'
import instr13 from '@/public/stemchests-instruction/13.png'
import instr14 from '@/public/stemchests-instruction/14.png'
import instr15 from '@/public/stemchests-instruction/15.png'

declare global {
  interface NodeRequire {
      /** A special feature supported by webpack's compiler that allows you to get all matching modules starting from some base directory.  */
      context: (
          directory: string,
          useSubdirectories: boolean,
          regExp: RegExp
      ) => any;
  }
}


const gallery1 = [stemchests, stemchestsReviews] as const;
const gallery2 = [stemchestsLogo, stemchestsCart, scwk6] as const;
const gallery3 = [instr1, instr2, instr3, instr4, instr5, instr5, instr6, instr7, instr8, instr9, instr10, instr11, instr12, instr13, instr14, instr15] as const;

import Gallery from '@/components/gallery'

export const metadata: Metadata = {
  title: 'STEMChests - Aditya Das',
  description: 'Who is Aditya?'
}

export default function Page() {
  return (
    
    <section className='flex flex-col pr-2 justify-items-stretch gap-y-2 sm:gap-y-4 h-full w-full overflow-clip mb-20 mt-1 sm:mt-0'>
      
      <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-2'>Project: STEMChests</h1>
      <p className='w-full'><span className='lf '>OVERVIEW: </span>Branding and product design I made for my non-profit, <Lnk href='https://www.stemchests.com/' >STEMChests</Lnk>. The non-profit model revolved around selling science kits and using all profits to donate more kits to students in underprivileged communities. So far, we have crowdfunded over $3,600 and distributed over 1000 kits.</p>
      <hr className='border-solid'></hr>

      <Gallery cols='2'>
        {gallery1.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>
      
      <hr className='border-solid'></hr>

      <p className='w-full'><span className='lf '>THE BOX: </span>With a tight budget constraint, I opted for a simple (and cheap) design. Taking advantage of the unintentional green-brown color harmony between the logo and the box, I was able to create an easily recognizable product that cost only $.43 per box!</p>

      <p>After this, I gave 25 "test boxes" to families from various different backgrounds and asked them to provide feedback for the kit. They were able to provide general feedback, submit photos, and also rate their experience with the kit. While we got mostly positive feedback, this helped me make some finishing touches to the instruction booklets and product to make it more accessible!</p>

      <hr className='border-solid'></hr>

      <Gallery cols='3'>
        {gallery2.map((img, i) => <ImageModal key={i} src={img} rounded={true}/>)}
      </Gallery>
      
      <hr className='border-solid'></hr>
      <p className='w-full'><span className='lf '>LOGO & BRANDING:</span> I chose vibrant colors and legible yet playful fonts to represent STEMChests. Accessibility was a big concern, since we wanted young students to be able to use the kits on their own. This meant big font sizes, detailed illustrations, and very simple instructions.</p>
      <hr className='border-solid'></hr>
      
      <Gallery cols='4'>
        {gallery3.map((img, i) => <ImageModal key={i} src={img} />)}
      </Gallery>


      <hr className='border-solid'></hr>
      <p>A few months ago, a customer came up to me at a workshop event and told me that they remembered me selling them a science kit a year before and that she recognized us from the boxes. It made me proud that I had created branding unique enough to be remembered for over a year, at least by one person :)</p>
      
      
      

      <hr className='border-solid '></hr>
      <Link href='/' className='lf'>All Projects →</Link>
      <hr className='border-solid '></hr>
      
    </section>
  )
}
