'use client'
import { ApiProvider } from '@/context/contextprovider'
import './globals.css'



export const metadata = {
  title: 'Prueba',
  description: 'Prueba Figma',
}




export default function RootLayout({ children }) {




  return (
     <ApiProvider>
    <html className='m-0 p-0'  suppressHydrationWarning={true} lang="en">
      <body >
       
        
        {children}
        
        </body>
    </html>
    </ApiProvider>
  )
}
