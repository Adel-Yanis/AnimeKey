import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'spotlight',
  title: 'Creator Spotlight',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Creator Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Portrait Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
    }),
    defineField({
      name: 'featureBody',
      title: 'Spotlight Body',
      type: 'blockContent',
    }),
  ],
})
