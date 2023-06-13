import './globals.css'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import { Inter } from 'next/font/google'
import BackToTopText from './components/BackToTopBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Flora Fauna Indonesia",
  description: 'Created by Kelompok 7 Kelas C PTI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BackToTopText />
        </body>
    </html>
  )
}
