import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Pages } from '@/collections/Pages'
import { Users } from '@/collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: slateEditor({}),
  collections: [Pages, Users],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || '',
    },
  }),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
        },
      })
    }
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
