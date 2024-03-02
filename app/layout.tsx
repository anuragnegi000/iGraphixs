import Header from '@/components/header'
import './globals.css'
import {Raleway} from "next/font/google"
// import {Raleway} from '@next/font/google'
import { Providers } from './providers';

const raleway = Raleway({ subsets: ['latin'] })


export const metadata = {
  title: 'iGraphixs',
  description: 'iGraphixs (the new trend)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className="dark">
      <body className={`${raleway.className} bg-black-950 text-gray-950 relative h-[5000px]`}>
      
       <Providers>
       <div className='bg-[#000000] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]' ></div>
      
        <Header/>
        {children}
       </Providers>
      </body>
    </html>
  )
}
