import React from 'react'

export default function IconSection({children, cols}: {children: React.ReactNode, cols?: string,}) {
  return (
    <section className={`grid grid-cols-1 my-2 ${cols} gap-6`}>
        {children}
    </section>
  )
}
