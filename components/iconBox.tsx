import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export default function IconBox({ children, title, icon}: {children: React.ReactNode, title: string, icon: StaticImport, }) {
    return (
    
        <div className='rounded-md py-6 px-8 bg-primary-900 flex flex-col items-center text-primary-200 gap-y-1.5 text-center border-2 border-solid border-primary-850'>
          <Image className='opacity-80 object-contain my-1.5 h-12 w-12' src={icon} alt='icon' />
          <h4 className='subf uppercase text-primary-100'>{title}</h4>
          {children}
        </div>
    )
}
