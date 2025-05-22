export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AnimeKey. All rights reserved.
      </div>
    </footer>
  )
}