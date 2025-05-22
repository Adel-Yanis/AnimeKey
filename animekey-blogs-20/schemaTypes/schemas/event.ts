// schemaTypes/schemas/event.ts
import { RuleType } from '../RuleType'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date & Time',
      type: 'datetime',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'ticketUrl',
      title: 'Ticket URL',
      type: 'url',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Event Description',
      type: 'blockContent',
    },
  ],
}
