import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'communityPost',
  title: 'Community Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'authorName',
      title: 'User Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Post Type',
      type: 'string',
      options: {
        list: [
          { title: 'Theory', value: 'theory' },
          { title: 'Discussion', value: 'discussion' },
          { title: 'Recommendation', value: 'recommendation' },
        ],
      },
    }),
    defineField({
      name: 'body',
      title: 'Post Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'approved',
      title: 'Approved by Admin',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
