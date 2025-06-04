import { fetchEventBySlug } from '../../../lib/queries';
import { PortableText } from '@portabletext/react';
import type { EventPost } from '../../../lib/types';
import Image from 'next/image';

interface Params {
  slug: string;
}

export default async function EventDetailPage({ params }: { params: Params }) {
  const event: EventPost = await fetchEventBySlug(params.slug);

  if (!event) {
    return <div className="text-white p-8">Event not found</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-animekey-green">{event.title}</h1>
      <p className="text-sm text-gray-400 mt-1">
        {new Date(event.date).toLocaleString()}
      </p>

      {event.image?.asset?.url && (
        <div className="relative w-full h-96 my-4">
          <Image
            src={event.image.asset.url}
            alt={event.title}
            fill
            className="rounded object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      {event.ticketUrl && (
        <p className="mt-2 text-animekey-green underline">
          <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
            Buy Tickets
          </a>
        </p>
      )}

      <div className="mt-6 text-white">
        <PortableText value={event.body} />
      </div>
    </main>
  );
}
