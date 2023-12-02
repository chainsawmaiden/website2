import React from 'react'
import ImageModal from './imageModal'
import Gallery from './gallery'

export default function ImageWithText({img, children}: {img: any, children: React.ReactNode}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[2fr_1fr] flex-col justify-items-center sm:flex-row overflow-x-scroll gap-y-3 gap-x-3 py-3 px-3 my-0 rounded-md items-center scrollbar-hide`}>
        <Gallery cols='sm:grid-cols-1'>
            <ImageModal src={img} rounded={true}/>
        </Gallery>
        <div className='flex flex-col gap-y-2 h-full'>{children}</div>
    </div>
  )
}
