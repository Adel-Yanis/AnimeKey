import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { _type, title = '', slug = { current: '' } } = body

  if (!_type) {
    return NextResponse.json({ error: 'Missing type' }, { status: 400 })
  }

  const typeToNotify = {
    blogPost: 'notifyBlogPost',
    loreEntry: 'notifyLorePost',
    spotlight: 'notifySpotlight',
    event: 'notifyEvent',
    communityPost: 'notifyCommunityPost',
  }

  const notifyKey = typeToNotify[_type]

  if (!notifyKey) {
    return NextResponse.json({ message: `No handler for type ${_type}` }, { status: 200 })
  }

  // Build local notification format
  const notification = {
    id: Date.now().toString(),
    type: _type,
    message: title,
    url: `/${_type === 'blogPost' ? 'blog' : _type}/${slug.current}`,
    timestamp: new Date().toLocaleString(),
    read: false,
    icon: '🆕',
  }

  // Store it temporarily (for localStorage based testing)
  const existing = JSON.parse(localStorage.getItem('animekey-notifications') || '[]')
  localStorage.setItem('animekey-notifications', JSON.stringify([notification, ...existing]))

  return NextResponse.json({ status: 'Notification created', notification }, { status: 200 })
}
