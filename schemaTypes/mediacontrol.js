import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediacontrol',
  title: 'Home Page Media',
  type: 'document',
  readOnly:true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      value: 'Global Assets',
      hidden: true,
    }),
    defineField({
      name: 'herosectionvideo',
      title: 'Hero Section Video',
      type: 'file',
    }),
    defineField({
      name: 'scrollvideo',
      title: 'Scrolling Video',
      type: 'file',
      readOnly: ({currentUser}) => {
        return !(currentUser.roles.find(({name}) => name === 'administrator'))
      }
    }),
    defineField({
      name: 'dotwaveasset',
      title: 'Floating Asset',
      type: 'file',
      readOnly: ({currentUser}) => {
        return !(currentUser.roles.find(({name}) => name === 'administrator'))
      }
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
