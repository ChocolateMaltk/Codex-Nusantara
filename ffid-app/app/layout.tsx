import './globals.css'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import { Inter } from 'next/font/google'

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
      <body className="dark:bg-slate-800">
        <Navbar />
        {children}
        </body>
    </html>
  )
}
