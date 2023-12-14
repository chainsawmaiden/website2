import React from 'react'
import ImageModal from './imageModal'
import Gallery from './gallery'
import { StaticImageData } from 'next/image'

export default function ImageWithTextLeft({img, children}: {img: StaticImageData, children: React.ReactNode}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] flex-col justify-items-center sm:flex-row my-2 gap-6 rounded-md items-center scrollbar-hide`}>
      <div className='flex flex-col gap-y-2 h-full justify-self-start py-2'>{children}</div>
      <ImageModal src={img} rounded={true}/>
    </div>
  )
}
