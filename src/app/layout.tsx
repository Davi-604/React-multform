import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FormProvider } from '@/contexts/FormContext'
import { MainContainer } from '@/components/MainContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white container mx-auto p-3`}>
        <FormProvider>
          <MainContainer 
            children={children}
          />
        </FormProvider>
      </body>
    </html>
  )
}
