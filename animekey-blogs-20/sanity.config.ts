import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'animekeyStudio',
  title: 'AnimeKey Blog Studio',
  projectId: 'brj0zoms',
  dataset: 'production',
  basePath: '/',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
