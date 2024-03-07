import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'


import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

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
      <html lang="en">
        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          <div className='bg-gradient-to-b from-rose-100 to-amber-100'>
            <Navbar />
              {children}
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
