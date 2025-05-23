// frontend/app/lore/page.tsx

import { getAllLoreEntries } from "../../lib/queries";
import { sanityClient } from "../../lib/sanity.client";
import LoreCard from "../../components/LoreCard";
import UserActivityTracker from "../../components/UserActivityTracker";
import type { LoreEntry } from "../../lib/types";

export default async function LorePage() {
  const loreItems: LoreEntry[] = await sanityClient.fetch(getAllLoreEntries);

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-2">Lore Section</h1>
      <p className="text-sm text-gray-400 mb-8">
        Explore deep dives into anime worlds, characters, and timelines.
      </p>

      {/* 🔵 Activity Tracking */}
      <UserActivityTracker />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loreItems.map((lore) => (
          <LoreCard key={lore._id} post={lore} />
        ))}
      </div>
    </main>
  );
}
