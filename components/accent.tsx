import React from 'react'

export default function Accent({children,} : {children: React.ReactNode,}) {
  return (
    <h4 className='bt text-2xl text-primary-200'>{children}</h4>
  )
}
