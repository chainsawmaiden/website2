import React from 'react'

export default function SectionTitle({children, separate} : {children: React.ReactNode, separate?: boolean}) {
  return (
    <h2 className={`lf text-[2.4rem] leading-[2.5rem] ${separate && 'mt-4'} text-primary-0`}>{children}</h2>
    
  )
}
