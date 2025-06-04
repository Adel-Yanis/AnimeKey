'use client';

import { Toaster } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#111',
              color: '#7EFFB2',
              fontFamily: 'DIN, sans-serif',
              border: '1px solid #7EFFB2',
              padding: '12px 16px',
              fontSize: '14px',
            },
          }}
        />
        {children}
      </div>
    </div>
  );
}
