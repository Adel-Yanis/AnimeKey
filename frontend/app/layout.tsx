// app/layout.tsx

import '../app/globals.css';
import ClientLayout from './ClientLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimeKey Blog',
  description: 'MENA anime news, lore, and community insights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}