"use client"

import { useForm, SubmitHandler } from "react-hook-form"

import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import {signUp} from "next-auth-sanity/client"
import {signIn, useSession} from "next-auth/react"
import {  toast } from "@/components/ui/use-toast"
import {z} from 'zod'

const signUpSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().min(6, { message: "Password is required and need to be at least 6 characters" }),
	confirmPassword: z.string().min(6, { message: "Confirm Password is required" }),
}).refine(data => data.password === data.confirmPassword, {
	message: "Passwords don't match",
	path: ["confirmPassword"],
})

type FormValues = {
	name: string
	email: string
	password: string
	confirmPassword: string
}

type signUpSchema = z.infer<typeof signUpSchema>

export const SignUpForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		} = useForm<FormValues>({
			defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			},
			resolver: zodResolver(signUpSchema),
		})

		
		

		const onSubmit: SubmitHandler<FormValues> = async (data) => {
			setIsLoading(true)
			try {
				const userData = await signUp({ 
					name: data.name,
					email: data.email,
					password: data.password,
					confirmPassword: data.confirmPassword
				})
				toast({
					title: "Account created",
					description: "We've created your account for you.",
					variant: "destructive",
				})
			} catch (error) {
				console.error(error)
			}
			setIsLoading(false)
			reset()
		}
		
		const inputStyle = classNames(
			'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xs',
		)
		

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-start max-w-5xl gap-4 mx-auto mt-16">
			
			<input type="text" className={inputStyle}  placeholder="Your Name"  {...register("name")}  name="name" />

			{errors.name && <p className="text-red-500">{errors.name?.message}</p>}
			
			<input type="email" className={inputStyle}  placeholder="Your Email"  {...register("email")}  name="email" />

			{errors.email && <p className="text-red-500">{errors.email?.message}</p>}

			<input className={inputStyle}  type="password" placeholder="Your Password" {...register("password")}   name="password" />

			{errors.password && <p className="text-red-500">{errors.password?.message}</p>}

			<input className={inputStyle}  type="password" placeholder="Confirm Password" {...register("confirmPassword")}   name="confirmPassword" />
			
			{errors.confirmPassword && <p className="text-red-500 ">{errors.confirmPassword.message}</p>}

			<Button type='submit'  className="max-w-xs">
				{isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />	}
				{isLoading ? "Loading..." : "Sign Up"}
			</Button>
		</form>
	)
}
