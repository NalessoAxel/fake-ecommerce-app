// Based on https://www.sanity.io/plugins/next-auth-sanity

import {  defineType, defineField } from "sanity"

export const user = defineType( {
	name: 'user',
	title: 'Users',
	type: 'document',
	fields: [
		defineField({
			name: 'isAdmin',
			title: 'Is Admin',
			type: 'boolean',
			initialValue: false,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			readOnly: true,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			readOnly: true,
		}),
		defineField({
			name: 'emailVerified',
			title: 'Email',
			type: 'string',
			readOnly: true,
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'url'
		}),
		defineField({
			name: 'password',
			type: 'string',
			hidden: true
		}),
		defineField({
			name: 'confirmPassword',
			type: 'string',
			hidden: true
		}),
	]
});