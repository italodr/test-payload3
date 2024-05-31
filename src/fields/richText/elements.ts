import { type RichTextElement } from '@payloadcms/richtext-slate'

import largeBody from './largeBody'

export const extendedElements: RichTextElement[] = [
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'link',
  largeBody,
  'upload',
  'ul',
  'ol',
]

export const basicElements: RichTextElement[] = ['link']
