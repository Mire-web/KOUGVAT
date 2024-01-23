import { Inter } from 'next/font/google';
import './globals.css';
import '../../styles/global.css';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })
const progress = new ProgressBar({
	size: 4,
	color:"rgb(56,189,248)",
	className: "z-50",
	delay:100,
});



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
