'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  FaFeatherAlt,
  FaUsers,
  FaBookOpen,
  FaStar,
} from 'react-icons/fa';
import NotificationBell from './NotificationBell';
import SmartSearchBar from './SmartSearchBar';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: '/blog', label: 'Blog', icon: <FaFeatherAlt /> },
    { href: '/lore', label: 'Lore', icon: <FaBookOpen /> },
    { href: '/spotlight', label: 'Spotlight', icon: <FaStar /> },
    { href: '/community', label: 'Community', icon: <FaUsers /> },
    { href: '/notifications', label: 'Notifications', icon: null }, // Icon handled manually
  ];

  return (
    <aside className="w-64 bg-[#121212] text-white p-6 hidden md:block">
      {/* Logo */}
      <div className="mb-6">
        <Link href="/" aria-label="AnimeKey Logo">
          <Image
            src="/logo-white.png"
            alt="AnimeKey"
            width={112}
            height={40}
            className="w-28 h-auto"
          />
        </Link>
      </div>

      {/* Smart Search Bar */}
      <div className="mb-8">
        <SmartSearchBar />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              {link.href === '/notifications' ? (
                <button
                  onClick={() => router.push(link.href)}
                  className={`flex items-center gap-3 px-3 py-2 rounded font-medium w-full text-left transition ${
                    pathname === link.href
                      ? 'bg-animekey-green text-black'
                      : 'hover:bg-animekey-green hover:text-black'
                  }`}
                >
                  <NotificationBell />
                  <span>{link.label}</span>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded font-medium transition ${
                    pathname === link.href
                      ? 'bg-animekey-green text-black'
                      : 'hover:bg-animekey-green hover:text-black'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
