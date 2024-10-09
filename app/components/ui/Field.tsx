import { forwardRef } from 'react'

import { IField, IFieldTextArea } from '@/types/form.interface'

export const Field = forwardRef<HTMLInputElement, IField>(
	({ type = 'text', className, placeholder, error, ...rest }, ref) => {
		return (
			<div className={className}>
				<label>
					<div className='text-sm mb-2'>{placeholder}</div>
					<input
						className='bg-white/50 h-9 w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-violet-600'
						type={type}
						name={placeholder}
						placeholder=''
						{...rest}
						ref={ref}
					/>
					{error && <div className='text-red-500 text-sm'>{error.message}</div>}
				</label>
			</div>
		)
	}
)
Field.displayName = 'Field'

export const FieldTextArea = forwardRef<HTMLTextAreaElement, IFieldTextArea>(
	({ type = 'text', placeholder, error, ...rest }, ref) => {
		return (
			<div className='col-span-2'>
				<label>
					<div className='text-sm mb-2'>{placeholder}</div>
					<textarea
						className='bg-white/50 min-h-[9.375rem] max-h-[18.75rem] w-full border border-slate-300 rounded-lg  resize-y p-2 focus:outline-none focus:ring-1 focus:ring-violet-600'
						name={placeholder}
						placeholder=''
						{...rest}
						ref={ref}
					/>
					{error && <div className='text-red-500 text-sm'>{error.message}</div>}
				</label>
			</div>
		)
	}
)
FieldTextArea.displayName = 'FieldTextArea'
