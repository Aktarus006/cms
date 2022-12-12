import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import link from "../../fields/link";
import richText from "../../fields/richText";

export const HoverHighlights: Block = {
  slug: 'hoverHighlights',
  labels: {
    singular: 'Hover Highlights Block',
    plural: 'HoverHighlights Blocks'
  },
  fields: [
    blockFields({
      name: 'hoverHighlightsFields',
      fields: [
        richText(),
        {
          name: 'addRowNumber',
          type: 'checkbox',
        },
        {
          name: 'highlights',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true
            },
            {
              name: 'description',
              type: 'text',
              required: true
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true
            },
            {
              name: 'enableLink',
              type: 'checkbox'
            },
            link({
              appearances: false,
              disableLabel: true,
              overrides: {
                admin: {
                  condition: (_, { enableLink }) => Boolean(enableLink)
                }
              }
            })
          ]
        }
      ]
    })
  ]
}
