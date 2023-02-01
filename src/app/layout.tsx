import '@styles/globals.css';
import { Lora } from '@next/font/google';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
