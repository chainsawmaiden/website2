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
      <body className='px-10 sm:px-24 bg-secondary-0 body-font font-abcdiatype font-normal selection:bg-[#EFD98D] overflow-x-clip scrollbar-hide'>
        {children}
      </body>
    </html>
  )
}
