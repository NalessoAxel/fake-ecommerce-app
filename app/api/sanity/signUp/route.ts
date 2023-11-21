import { signUpHandler } from 'next-auth-sanity';
import { client } from '@/sanity/lib/client';

export const POST = signUpHandler(client);