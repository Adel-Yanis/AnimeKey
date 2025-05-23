// frontend/components/Footer.tsx
'use client'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white text-center py-4 border-t border-zinc-700">
      <p className="text-sm">
        © {new Date().getFullYear()} AnimeKey. All rights reserved.
      </p>
    </footer>
  )
}
