import React from 'react'

export default function SubsectionTitle({children, separate} : {children: React.ReactNode, separate?: boolean,}) {
  return (
    <h2 className={`lf leading-5 text-[1.56rem] ${separate && 'mt-3'} mb-1`}>{children}</h2>
    
  )
}
