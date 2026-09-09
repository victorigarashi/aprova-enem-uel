import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aprova — ENEM & UEL',
  description: 'Sua rotina inteligente de estudos para o ENEM e Vestibular UEL.',
  metadataBase: new URL('https://aprova-enem-uel.igarashivictor0.chatgpt.site'),
  openGraph: { title: 'Aprova — ENEM & UEL', description: 'Sua rotina inteligente de estudos para o ENEM e Vestibular UEL.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Aprova — ENEM & UEL', description: 'Sua rotina inteligente de estudos para o ENEM e Vestibular UEL.', images: ['/og.png'] },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#fff9fb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
