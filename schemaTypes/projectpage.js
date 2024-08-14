import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Project Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'showname',
      title: 'Show Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Page URL Slug',
      type: 'slug',
    }),
    defineField({
      name: 'cityState',
      title: 'City / State',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'showdate',
      title: 'Date of Show',
      type: 'date',
      dateFormat: 'MMMM Do YYYY',
    }),
    defineField({
      name: 'projectsubtitle',
      title: 'Short Description (2-liner)',
      type: 'string',
    }),
    defineField({
      name: 'ytembedlink',
      title: 'Youtube Featured Video Link',
      type: 'url',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'event',
      title: 'Event Type',
      type: 'string',
    }),
    defineField({
      name: 'venue',
      title: 'Show Venue',
      type: 'string',
    }),
    defineField({
      name: 'dronecount',
      title: 'Drone Count',
      type: 'number',
    }),
    defineField({
      name: 'casestudy',
      title: 'Long Description',
      type: 'array',
      of: [{type:'block'}]
    }),
    defineField({
      name: 'showimages',
      title: 'Show Images',
      type: 'array',
      of: [{type:'image'}]
    }),

    
    
  ],
  preview: {
    select: {
      title: 'showname',
    },
  },
})