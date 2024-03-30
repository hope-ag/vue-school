import { defineField, defineType, defineArrayMember } from 'sanity'

export const heroContentType = defineType({
  name: 'heroContent',
  title: 'Hero Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'array',
      title: 'Title',
      validation: (rule) => [rule.required()],
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              type: 'string',
              title: 'Text',
              validation: (rule) => [rule.required()]
            }),
            defineField({
              name: 'highlighted',
              type: 'boolean',
              title: 'Highlighted',
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => [rule.required()]
    }),
    defineField({
      name: 'cta',
      type: 'string',
      title: 'CTA',
      validation: (rule) => [rule.required()]
    })
  ]
})