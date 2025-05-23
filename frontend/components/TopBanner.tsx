// frontend/components/TopBanner.tsx
'use client';

import Image from 'next/image';

export default function TopBanner() {
  return (
    <div className="w-full bg-black flex justify-center py-4">
      <Image
        src="/logo-white.png"
        alt="Logo"
        width={120}
        height={40}
        priority
      />
    </div>
  );
}
