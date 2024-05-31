import type { CollectionConfig } from 'payload/types'
import { richText } from '@/fields/richText'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    richText(),
  ],
}
