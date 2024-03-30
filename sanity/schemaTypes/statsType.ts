import { defineField, defineType } from 'sanity'

export const statsType = defineType({
  name: 'stats',
  title: 'Stats',
  type: 'document',
  fields: [
    defineField({
      name: 'courses',
      type: 'number',
      title: 'Courses',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lessons',
      type: 'number',
      title: 'Lessons',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hours',
      type: 'number',
      title: 'Hours',
      validation: (rule) => rule.required(),
    }),
  ]
})