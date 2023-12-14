import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export default function IconBox({ children, title, icon}: {children: React.ReactNode, title: string, icon: StaticImport, }) {
    return (
    
        <div className='rounded-md py-4 px-8 bg-primary-900 flex flex-col items-center text-primary-200 gap-y-1.5 text-center'>
          <div className='h-12 w-12 my-1.5 '><Image className='w-auto opacity-80 object-contain ' src={icon} alt='icon' /></div>
          <h4 className='subf uppercase text-primary-100'>{title}</h4>
          {children}
        </div>
    )
}
