import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { Button } from './ui/button'

export const UserConnection = () => {
  return (
	<Link href='/login' passHref>
		<Button variant="ghost" size="sm">
			<Icons.user />
		</Button>
	</Link>
  )
}

