import { Inter } from 'next/font/google'
import Navigation from '../../components/Navigation'
import '../../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  console.log('Hola') // No se ejecuta en el cliente xq se renderiza en el servidor

  return (
    <html lang='en'>
      <head>
        <title>Hola</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
