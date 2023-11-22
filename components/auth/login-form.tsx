"use client"

import { useForm } from "react-hook-form"
import type { FieldValues } from "react-hook-form"

import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import {signUp} from "next-auth-sanity/client"
import {signIn, useSession} from "next-auth/react"

type Inputs = {
	name: string
	email: string
	password: string
	confirmPassword: string
}

export const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	const [isDisabeld, setIsDisabled] = useState<boolean>(true)

	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
		} = useForm<Inputs>({
			defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			},
		})
		

		const onSubmit = async (data: FieldValues) => {
			setIsLoading(true)
			setIsDisabled(true)
			const user = {
				name: data.name,
				email: data.email,
				password: data.password
			}
			try {
				const user = await signIn("sanity", {
					name: data.name,
					email: data.email,
					password: data.password
				})
			} catch (error) {
				
			}
			
			console.log(user)
			setIsLoading(false)
			setIsDisabled(false)
			reset()
		}
		

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-start max-w-5xl gap-4 mx-auto mt-16">
			<Input type="text" placeholder="Your Name" label="Your Name" {...register("name", { required: 'Name is required' })}  name="name" className='max-w-xs'/>
			{errors.name?.message && <p className="text-red-500">{errors.name?.message}</p>}
		
			<Input type="email" placeholder="Your Email" label="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}  name="email" className='max-w-xs'/>
			{errors.email && <p className="text-red-500">Email is required</p>}

			<Input label="Password"  type="password" placeholder="Your Password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, validate: (value) => value === getValues("password") })}   name="password" className='max-w-xs'/>
			{errors.password && <p className="text-red-500">Password is required</p>}

			<Input label="Password"  type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: "Confirm Password is required",  validate: (value) => value === getValues("password") || "Passwords must match" })}   name="password" className='max-w-xs'/>
			{errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

			<Button type='submit'  className="max-w-xs" disabled={isDisabeld}>
				{isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />	}
				{isLoading ? "Loading..." : "Login"}
			</Button>
		</form>
	)
}
