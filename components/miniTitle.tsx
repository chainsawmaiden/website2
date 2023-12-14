import React from 'react'

export default function MiniTitle({children} : {children: React.ReactNode}) {
  return (
    <h5 className={`lf uppercase text-primary-300 -mb-0.5`}>{children}</h5>
  )
}
