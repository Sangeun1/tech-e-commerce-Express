import { CollectionConfig } from 'payload/types';

const Options: CollectionConfig = {
  slug: 'options',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'values',
      type: 'array',
      label: 'Option Values',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
  ],
};

export default Options;