// app/events/[slug]/page.tsx
import { sanityClient as client } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'

type EventDetail = {
  title: string
  date: string
  location: string
  ticketUrl?: string
  mainImage: { asset: { url: string } }
  body: any
}

async function getEvent(slug: string): Promise<EventDetail> {
  const query = `*[_type == "event" && slug.current == $slug][0]{
    title,
    date,
    location,
    ticketUrl,
    mainImage { asset->{url} },
    body
  }`
  return await client.fetch(query, { slug })
}

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = await getEvent(params.slug)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-sm text-gray-400 mb-4">{new Date(event.date).toLocaleString()} — {event.location}</p>
      {event.ticketUrl && (
        <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
          <button className="mb-4 px-4 py-2 bg-animekey-green text-black rounded hover:brightness-110">Buy Ticket</button>
        </a>
      )}
      <img src={event.mainImage.asset.url} alt={event.title} className="w-full h-72 object-cover rounded mb-4" />
      <div className="prose prose-invert">
        <PortableText value={event.body} />
      </div>
    </div>
  )
}
