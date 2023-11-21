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
			name: 'image',
			title: 'Image',
			type: 'url'
		}),
		defineField({
			// this is only if you use credentials provider
			name: 'password',
			type: 'string',
			hidden: true
		}),
	]
  });
  

  
 
  
  // verification-token - only if you use email provider
  
  export const verificationToken = defineType({
	name: 'verification-token',
	title: 'Verification Token',
	type: 'document',
	fields: [
	  {
		name: 'identifier',
		title: 'Identifier',
		type: 'string'
	  },
	  {
		name: 'token',
		title: 'Token',
		type: 'string'
	  },
	  {
		name: 'expires',
		title: 'Expires',
		type: 'datetime'
	  }
	]
  });