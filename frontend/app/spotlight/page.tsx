// frontend/app/spotlight/page.tsx
import { fetchAllSpotlights } from "../../lib/queries";
import SpotlightCard from "../../components/SpotlightCard";
import UserActivityTracker from "../../components/UserActivityTracker";
import type { SpotlightEntry } from "../../lib/types";

export default async function SpotlightPage() {
  const spotlights: SpotlightEntry[] = await fetchAllSpotlights();

  return (
    <main className="text-white px-4 md:px-8 py-12">
      <h1 className="text-2xl font-bold text-animekey-green mb-4">Creator Spotlights</h1>
      <p className="text-sm text-gray-400 mb-8">
        Discover the brilliant minds shaping the anime world.
      </p>

      {/* 🧠 Activity Tracking */}
      <UserActivityTracker />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spotlights.map((spotlight) => (
          <SpotlightCard key={spotlight.slug.current} spotlight={spotlight} />
        ))}
      </div>
    </main>
  );
}
