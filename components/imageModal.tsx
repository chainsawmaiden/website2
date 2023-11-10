"use client"

import React, {useState} from 'react'
import Image from 'next/image'

export default function ImageModal({src, rounded}: {src: any, rounded?: boolean}) {
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
            src={src} alt='project image' className={`cursor-zoom-in inline-flex w-fit h-fit max-h-full max-w-full m-auto ${rounded && 'rounded-md'}`}  />
        </>
    )
}
