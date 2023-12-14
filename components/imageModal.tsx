"use client"

import React, {useState} from 'react'
import Image from 'next/image'

export default function ImageModal({src, rounded, maxh, outline}: {src: any, rounded?: boolean, maxh?: string, outline?: boolean,}) {
    const [expand, setExpand] = useState(false as boolean)

    return (
        <>
            <div 
                onClick={() => setExpand(false)}
                className={`transition-all duration-300 z-20 cursor-zoom-out  fixed flex items-center h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-primary-0 bg-opacity-75 overflow-scroll scrollbar-hide p-8 ${expand ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} >
                <Image src={src} alt='project image' className={`h-auto w-auto max-h-full max-w-full m-auto rounded-md`}  />
            </div>
                
            <Image
            onClick={() => setExpand(true)} 
            src={src} alt='project image' className={`cursor-zoom-in inline-flex w-auto h-auto ${rounded && 'rounded-md'} ${maxh} ${outline && 'border-solid border-primary-850 border-2'}`}  />
        </>
    )
}
