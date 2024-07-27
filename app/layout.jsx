import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Reticketer',
  description: 'Easily Resell Event Tickets',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
