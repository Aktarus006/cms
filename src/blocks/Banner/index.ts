import { Block } from 'payload/types'
import { blockFields } from '../../fields/blockFields'

export const Banner: Block = {
  slug: 'banner',
  fields: [
    blockFields({
      name: 'bannerFields',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'type',
              type: 'select',
              defaultValue: 'default',
              options: [
                {
                  label: 'Default',
                  value: 'default'
                },
                {
                  label: 'Success',
                  value: 'success'
                },
                {
                  label: 'Warning',
                  value: 'warning'
                },
                {
                  label: 'Error',
                  value: 'error'
                }
              ],
              admin: {
                width: '50%',
              }
            },
            {
              name: 'addCheckmark',
              type: 'checkbox',
              admin: {
                width: '50%',
                style: {
                  alignSelf: 'center'
                }
              }
            }
          ]
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            elements: [
              'link'
            ]
          }
        }
      ]
    })
  ]
}
