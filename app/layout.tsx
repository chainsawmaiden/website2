import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Aditya Das',
  description: 'A portfolio and/or digital shrine that Aditya Das has built for himself.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='px-5 md:px-20 bg-secondary-0 body-font h-screen font-normal font-times selection:bg-yellow-700 overflow-x-clip '>
        {children}
      </body>
    </html>
  )
}
