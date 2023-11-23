import * as React from "react"

import { cn } from "@/lib/utils"



  export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;	
	name: string;
	type: string;	
	className?: string;
	
  }
  

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  	({ className, label, name, type = 'text', ...props  }, ref) => {

	

    return (
	<div className='flex flex-col justify-start items-stat'>
		<label className="block mb-2 text-sm font-bold text-black-foreground" htmlFor={name}>
			{label}
		</label>

		<input
			type={type}
			className={cn(
			"flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
			className
			)}
			ref={ref}
			{...props}
		/>
		 
	  </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
