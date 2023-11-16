import React from 'react'

import { Metadata } from 'next'
import Lnk from '@/components/lnk'

import Gallery from '@/components/gallery'
import ImageModal from '@/components/imageModal'

export const metadata: Metadata = {
  title: 'Robotic Arm - Aditya Das',
  description: 'Bluetooth-controlled robotic arm built by Aditya Das.'
}


export default function Page() {
  return (
    
    <>
      
      <h1 className='font-abcfavorit text-5xlfavorit leading-[1.15] w-full -mb-2'>Bluetooth-Controlled Arm</h1>
      <p className='w-full'>A robotic arm that can be controlled by a wearable glove, and my first rodeo with human-computer interaction. Creatively named the "Bluetooth-Controlled Arm" by my high school self. My final project for Harvard Summer School's PHYS S-12, taught by <Lnk href='https://nathanmelenbrink.com/'>Nathan Melenbrink</Lnk> and <Lnk href='https://evicshen.com/'>Victoria Shen</Lnk>. Due to time constraints, lack of technical prowess, and the prevalence of a global pandemic, this project was quite janky. However, it sparked my fascination for creating human-centered technology!</p>
      <p>For a more detailed write-up, check out <Lnk href='https://chainsawmaiden.github.io/PHYS_S-12/final-project.html'>this webpage</Lnk> that was coded many moons ago.</p>

      <hr className='border-solid'></hr>

      <div className='w-auto aspect-video max-h-full mt-1.5'><iframe width="560" height="315" src="https://www.youtube.com/embed/GPSEP8xgVMI?si=tY0EiFn0wUKEZavL" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen 
        className='w-full h-full rounded-md' />
      </div>

      <hr className='border-solid '></hr>
      <Lnk href='/projects/allofme'>Next Project →</Lnk>
      <hr className='border-solid '></hr>
      
    </>
  )
}
