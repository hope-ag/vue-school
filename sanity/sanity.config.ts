import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'vue school',

  projectId: 'YOUR_PROJECT_ID',
  dataset: 'YOUR_DATASET',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
