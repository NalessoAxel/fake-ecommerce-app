"use client"
import { useForm, UseFormRegister } from "react-hook-form"
import type { FieldValues } from "react-hook-form"
import { Input } from '@/components/ui/input'
import { Button } from "./ui/button"
import { useState } from "react"
import { Loader2 } from "lucide-react"

type Inputs = {
	email: string
	password: string
}

export const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	// const isDisabled = isLoading || data.email.length === 0 || Inputs.password.length === 0

	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
		} = useForm<Inputs>({
			defaultValues: {
			email: "",
			password: "",
			},
		})
		

		const onSubmit = async (data: FieldValues) => {
			setIsLoading(true)
			console.log(data)
			setIsLoading(false)
			reset()
		}
		

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-start gap-4">
			<Input type="email" placeholder="Your Email" label="Your Name" {...register("email", { required: true })}  name="name" className='max-w-xs'/>
		
			<Input type="email" placeholder="Your Email" label="Email" {...register("email", { required: true })}  name="email" className='max-w-xs'/>

			<Input label="Password"  type="password" placeholder="Your Password" {...register("password", { required: true })}   name="password" className='max-w-xs'/>

			<Button type='submit'  className="max-w-xs" >
				{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />	}
				{isLoading ? "Loading..." : "Login"}
			</Button>
		</form>
	)
}
