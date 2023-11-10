import React from 'react'

export default function Gallery({children, cols, smcols}: {children: React.ReactNode, cols: number, smcols?: number}) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${cols} flex-col justify-items-center sm:flex-row overflow-x-scroll px-6 gap-y-3 gap-x-3 py-6 my-0 sm:my-4 rounded-md items-center bg-primary-0 scrollbar-hide`}>
        
        {children}
    </div>
  )
}
