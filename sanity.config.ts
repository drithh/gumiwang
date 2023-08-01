import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/src/sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'gumiwang',

  projectId: '87eagmvs',
  dataset: 'production',
  basePath: '/admin',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
