<<<<<<< HEAD
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
=======
import "./globals.css";




export default function RootLayout({ children }) {
>>>>>>> fc11eab8575618b13be30f0fb4a093a8f362dbdd
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
