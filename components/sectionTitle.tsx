import React from 'react'

export default function SectionTitle({children, separate} : {children: React.ReactNode, separate?: boolean}) {
  return (
    <h2 className={`lf leading-6 text-[1.92rem] ${separate && 'mt-6'} mb-1 text-primary-0`}>{children}</h2>
    
  )
}
