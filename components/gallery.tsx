import React from 'react'

export default function Gallery({children, cols, caption}: {children: React.ReactNode, cols: string, caption?: string}) {
  return (
    <>
    <div className={`grid grid-cols-1 ${cols}  flex-col justify-items-center sm:flex-row overflow-x-scroll gap-y-3 gap-x-3 py-3 px-3 my-0 rounded-md items-center scrollbar-hide`}>
        {children}
        {caption && <p className='bt text-primary-400 col-span-full w-fit text-center'>{caption}</p>}
    </div>
    
    </>
  )
}
