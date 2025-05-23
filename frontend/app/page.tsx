import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="text-white p-8">
      <h1 className="text-3xl font-bold">Welcome to AnimeKey</h1>
      <Image src="/logo-white.png" alt="AnimeKey Logo" width={200} height={50} />
    </main>
  );
}
