import { client } from "@/sanity/lib/client";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";

import { NextAuthOptions } from "next-auth";
import GoogleProvide from "next-auth/providers/google"

export const authOptions: NextAuthOptions  = {
	providers: [
		GoogleProvide({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
		}),
		SanityCredentials(client)
	],
	session: {
		strategy: 'jwt',
	},
	adapter: SanityAdapter(client),
	debug: process.env.NODE_ENV !== 'production',
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {}
}