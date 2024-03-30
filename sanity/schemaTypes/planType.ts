import { defineField, defineType, defineArrayMember } from 'sanity'

export const pricingPlanType = defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'key',
      title: 'Key',
      validation: (rule) => [rule.required(), rule.regex(/^(basic|professional|basic2)$/i)],
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (rule) => rule.required(),
      
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name',
            }),
            defineField({
              name: 'enabled',
              type: 'boolean',
              title: 'Enabled',
            }),
            defineField({
              name: 'emphasized',
              type: 'boolean',
              title: 'Emphasized',
            })
          ]
        }),
      ],
    })
  ]
})