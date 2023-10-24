import React from 'react'

export default function Banner({children} : {children: React.ReactNode}) {
  return (
    <article className='-ml-10 sm:-ml-24 top-0 bg-yellow-300 text-center md:text-left text-primary-100 md:sticky w-screen z-[999] font-times text-base italic px-10 md:px-24'>
        <hr className='solid bg-primary-0'></hr>
        <p>{children}</p>
    </article>
  )
}
