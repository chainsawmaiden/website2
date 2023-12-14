import React from 'react'

export default function SectionTitle({children, separate} : {children: React.ReactNode, separate?: boolean}) {
  return (
    <h2 className={`lf text-5xlfavorit leading-[3rem] ${separate && 'mt-4'} text-primary-0`}>{children}</h2>
    
  )
}
