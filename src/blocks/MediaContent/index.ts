import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import link from "../../fields/link";
import richText from "../../fields/richText";


export const MediaContent: Block = {
  slug: 'mediaContent',
  fields: [
    blockFields({
      name: 'mediaContentFields',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'alignment',
              type: 'select',
              defaultValue: 'contentMedia',
              options: [
                {
                  label: 'Content + Media',
                  value: 'contentMedia'
                },
                {
                  label: 'Media + Content',
                  value: 'mediaContent'
                }
              ],
              admin: {
                description: 'Choose how to align the content for this block',
                width: '50%'
              }
            },
            {
              name: 'container',
              type: 'checkbox',
              admin: {
                description: 'Check this box to render this block with a background container',
                width: '50%',
                style: {
                  alignSelf: 'flex-end'
                }
              }
            }
          ]
        },
        richText(),
        {
          name: 'enableLink',
          type: 'checkbox',
        },
        link({
          appearances: false,
          overrides: {
            admin: {
              condition: (_, { enableLink }) => enableLink
            }
          }
        }),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true
        }
      ]
    })
  ]
}
