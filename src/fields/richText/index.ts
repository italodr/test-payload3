import { slateEditor } from '@payloadcms/richtext-slate'
import { RichTextField } from 'payload/types'

import { extendedElements } from './elements'
import { extendedLeaves } from './leaves'

export const richText = (): RichTextField => ({
  name: 'richText',
  type: 'richText',
  required: true,
  editor: slateEditor({
    admin: {
      elements: extendedElements,
      leaves: extendedLeaves,
      upload: {
        collections: {
          media: {
            fields: [
              {
                name: 'enableLink',
                type: 'checkbox',
                label: 'Enable Link',
              },
            ],
          },
        },
      },
    },
  }),
})
