// schemaTypes/schemas/lore.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'lore',
  title: 'Lore Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Lore Category',
      type: 'string',
      options: {
        list: [
          { title: 'Character', value: 'character' },
          { title: 'Universe', value: 'universe' },
          { title: 'Faction', value: 'faction' },
          { title: 'Power / Ability', value: 'power' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Anime Title / Series',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Lore Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
