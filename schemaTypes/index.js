import {defineField, defineType} from 'sanity'

const releaseType = defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'statusEs',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'songlink',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cover',
      type: 'image',
    }),
  ],
})

const bannerType = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEs',
      type: 'string',
      description: 'Spanish Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitleEs',
      type: 'string',
      description: 'Spanish Subtitle',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'callToAction',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'callToActionEs',
      type: 'string',
      description: 'Spanish Call to Action',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})

const profileInfoType = defineType({
  name: 'profileInfo',
  title: 'Profile Info',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bioEs',
      type: 'text',
      description: 'Spanish Bio',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
    }),
    defineField({
      name: 'location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

const listenNowContentType = defineType({
  name: 'listenNowContent',
  title: 'Listen Now Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'iframe',
      type: 'text',
    })
  ],
})

const socialType = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'string',
      description: 'Font Awesome icon classname https://fontawesome.com/v6',
    }),
  ],
})

export const schemaTypes = [releaseType, bannerType, profileInfoType, listenNowContentType, socialType]
