import SidebarLayout from '@/components/sidebarLayout'
import React from 'react'

export default function ProjectsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <SidebarLayout exclude={0}>
            <section className='pf flex flex-col gap-y-2 h-full'>
                {children}
            </section>
        </SidebarLayout>
    )
  }
  