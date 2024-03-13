import { Urbanist , Satisfy } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'


import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })
const font2 = Satisfy({ subsets: ['latin'] , weight: ['400'] , variable : '--satisfy' })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      afterSignInUrl="/"
      afterSignUpUrl="/onboarding">
      <html lang="en" className={`${font2.variable}`}>
        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
            <Navbar />
              {children}
            <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
