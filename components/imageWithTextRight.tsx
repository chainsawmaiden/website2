import React from 'react'
import ImageModal from './imageModal'
import Gallery from './gallery'
import { StaticImageData } from 'next/image'

export default function ImageWithTextRight({img, children}: {img: StaticImageData, children: React.ReactNode}) {
  return (
    <div className={`lg:grid lg:grid-cols-[2fr_1fr] flex flex-col justify-items-center my-2 gap-x-6 rounded-md items-start scrollbar-hide h-min`}>
        <ImageModal src={img} rounded={true}/>
        <div className='flex flex-col gap-y-2 justify-self-start py-2'>{children}</div>
    </div>
  )
}
