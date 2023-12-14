import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export default function IconBox({ children, title, icon}: {children: React.ReactNode, title: string, icon: StaticImport, }) {
    return (
    
        <div className='rounded-md py-4 px-8 bg-primary-900 flex flex-col items-center text-primary-200 gap-y-1.5 text-center'>
          <Image className='w-auto h-12 my-3 opacity-80' src={icon} alt='icon' />
          <h4 className='lf uppercase text-primary-100'>{title}</h4>
          {children}
        </div>
    )
}
