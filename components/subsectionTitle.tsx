import React from 'react'

export default function SubsectionTitle({children, separate} : {children: React.ReactNode, separate?: boolean,}) {
  return (
    <h2 className={`font-abcfavorit leading-7 text-[1.75rem] ${separate && 'mt-3'}`}>{children}</h2>
    
  )
}
