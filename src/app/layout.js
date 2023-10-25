import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hola</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
