// animekey-blogs-20/schemaTypes/index.ts

import blogPost from './schemas/blogPost'
import author from './schemas/author'
import category from './schemas/category'
import homePage from './schemas/homePage'
import siteSettings from './schemas/siteSettings'
import blockContent from './schemas/blockContent'
import lore from './schemas/lore'
import spotlight from './schemas/spotlight'
import communityPost from './schemas/communityPost'
import series from './schemas/series'
import event from './schemas/event'
export const schemaTypes = [
  blogPost,
  lore,
  author,
  category,
  homePage,
  siteSettings,
  blockContent,
  spotlight,
  communityPost,
  series,
  event
]
