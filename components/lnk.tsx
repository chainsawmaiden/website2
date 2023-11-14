import React from 'react'
import Link from 'next/link'

export default function Lnk({children, href}: {children:React.ReactNode, href:string}) {
  return (
    <Link href={href} className='lf hover:text-yellow-400 transition inline-flex flex-row' target={href[0] == "/" ? "_self" : "_blank"}>
        {children}
        </Link>
  )
}
