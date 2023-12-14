import React from 'react'
import ImageModal from './imageModal'
import Gallery from './gallery'
import { StaticImageData } from 'next/image'

export default function ImageWithTextRight({img, children}: {img: StaticImageData, children: React.ReactNode}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[2fr_1fr] flex-col justify-items-center sm:flex-row my-0 gap-6 rounded-md items-center scrollbar-hide`}>
        <ImageModal src={img} rounded={true}/>
        <div className='flex flex-col gap-y-2 h-full justify-self-start py-2'>{children}</div>
    </div>
  )
}
