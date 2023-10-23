import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Aditya Das',
  description: 'My Personal Portfolio',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='px-10 bg-secondary-0 body-font font-abcdiatype font-normal overflow-x-wrap sm:px-[5.5rem] selection:bg-primary-800 scrollbar-hide'>
        {children}
      </body>
    </html>
  )
}
