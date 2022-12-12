import { GlobalConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin"
import link from "../fields/link"

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: isAdmin
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'navItems',
          type: 'array',
          fields: [
            link({
              appearances: false
            })
          ]
        }
      ]
    }
  ]
}
