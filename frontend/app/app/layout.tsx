import { Libre_Franklin } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import "./globals.css";
import Header from './ui/header';
import Footer from './ui/footer';

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})

const cormorant_garamond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={libre_franklin.variable + ' ' + cormorant_garamond.variable}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
