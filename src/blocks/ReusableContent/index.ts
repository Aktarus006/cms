import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";


export const ReusableContent: Block = {
  slug: 'reusableContentBlock',
  fields: [ 
    blockFields({
      name: 'reusableContentBlockFields',
      fields: [
        {
          name: 'reusableConten',
          type: 'relationship',
          relationTo: 'reusable-content',
          required: true
        }
      ]
    })
  ]
}
