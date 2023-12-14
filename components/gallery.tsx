import React from 'react'

export default function Gallery({children, cols, caption}: {children: React.ReactNode, cols: string, caption?: string}) {
  return (
    <>
    <div className={`grid grid-cols-1 ${cols} min-h-fit flex-col justify-items-center sm:flex-row overflow-x-scroll gap-y-3 gap-x-3 py-3 my-0 rounded-md items-center scrollbar-hide sm:-mx-8`}>
        {children}
        {caption && <p className='bt text-primary-600 col-span-full w-fit text-center'>{caption}</p>}
    </div>
    
    </>
  )
}
