import SidebarLayout from '@/components/sidebarLayout'
import React from 'react'

export default function ProjectsLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <SidebarLayout>
            <section className='flex pf flex-col pr-2 justify-items-stretch gap-y-2 sm:gap-y-3 min-h-fith-full w-full mb-20 mt-1 sm:mt-0'>
                {children}
            </section>
        </SidebarLayout>
    )
  }
  