import '../app/globals.css';
import type { Metadata } from 'next';
import ClientLayoutWrapper from './ClientLayoutWrapper';

export const metadata: Metadata = {
  title: 'AnimeKey Blog',
  description: 'MENA anime news, lore, and community insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="bg-black text-white font-sans">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
