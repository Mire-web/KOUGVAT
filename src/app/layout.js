import { Inter } from 'next/font/google';
import './globals.css';
import '../../styles/global.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KOUGVAT',
  description: 'Get the best lodges in and around Ifite-Awka',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
