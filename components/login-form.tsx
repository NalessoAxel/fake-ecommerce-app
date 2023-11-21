"use client"
import { useForm } from "react-hook-form"
import type { FieldValues } from "react-hook-form"
import { Input } from '@/components/ui/input'
import { Button } from "./ui/button"

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	  } = useForm()

	  const onSubmit = async (data: FieldValues) => {
		  console.log(data)
	  }

  return (
	<form onSubmit={handleSubmit(onSubmit)} className="mt-16 flex w-full flex-col items-center justify-center gap-4">
		<Input type="email" placeholder="Your Email" {...register("email"), 
			{
			required: true
			}} 
			className='max-w-xs'/>

		<Input type={"password"} placeholder={"Your Password"} {...register("email") } className='max-w-xs'/>
		
		<Button type='submit' className="max-w-xs">Login</Button>
	</form>
  )
}
