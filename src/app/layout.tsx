import '@styles/globals.css';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Lora } from '@next/font/google';

const lora = Lora({
  weight: ['400', '500'],
  variable: '--font-lora',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
