import { NextResponse } from 'next/server';
import { fetchSearchResults } from '../../../lib/queries';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.trim().length < 2) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    const results = await fetchSearchResults(query.trim());
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API Error:', error);
    return new NextResponse(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
