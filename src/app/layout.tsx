import type { Metadata } from 'next'
import './globals.css'
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Google Clone Next js',
  description: 'Google clone created by Next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
      {children}
      {/*Footer*/}
      <Footer/>
      </body>
    </html>
  )
}
