'use client';

import type { Category } from '../lib/types';

interface CategoryFilterProps {
  categories: Category[];
  selected: string | null;
  onChange: (slug: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <button
        className={`px-4 py-1 rounded text-sm font-medium border transition ${
          selected === null
            ? 'bg-animekey-green text-black'
            : 'border-animekey-green text-animekey-green hover:bg-animekey-green hover:text-black'
        }`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug.current}
          className={`px-4 py-1 rounded text-sm font-medium border transition ${
            selected === cat.slug.current
              ? 'bg-animekey-green text-black'
              : 'border-animekey-green text-animekey-green hover:bg-animekey-green hover:text-black'
          }`}
          onClick={() => onChange(cat.slug.current)}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}
