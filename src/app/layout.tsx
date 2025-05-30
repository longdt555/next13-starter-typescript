'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from '../components/app.header'
import AppFooter from '../components/app.footer'
import { Container } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container>
          {children}
        </Container>
        <AppFooter />
      </body>
    </html >
  )
}
