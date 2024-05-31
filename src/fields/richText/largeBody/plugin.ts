import { type RichTextCustomElement } from '@payloadcms/richtext-slate'

// @ts-ignore for testing purposes
export const withLargeBody: RichTextCustomElement['plugins'][0] = (incomingEditor) => {
  const editor = incomingEditor
  const { shouldBreakOutOnEnter } = editor

  editor.shouldBreakOutOnEnter = (element: any) =>
    element.type === 'large-body' ? true : shouldBreakOutOnEnter(element)

  return editor
}
