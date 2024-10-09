'use client'

import cn from 'clsx'
import { SubmitHandler } from 'react-hook-form'

import { Field, FieldTextArea } from '../ui/Field'
import Loader from '../ui/Loader'

import { ICreateFields } from '@/types/form.interface'

interface Inputs extends ICreateFields {
	name: string
	author?: string
	description?: string
	text: string
}

const FormCreateBook = ({
	handleSubmit,
	onSubmit,
	register,
	errors,
	isLoading
}: {
	handleSubmit: (
		callback: SubmitHandler<Inputs>
	) => (e?: React.BaseSyntheticEvent) => Promise<void>
	onSubmit: SubmitHandler<Inputs>
	isLoading: boolean
	register: any
	errors: any
}) => {
	return (
		<>
			{isLoading ? (
				<Loader count={4} height={50} />
			) : (
				<form
					className='max-w-[600px] grid grid-cols-2 gap-4 w-full mx-auto bg-violet-200 rounded-lg p-4 relative overflow-hidden'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Field
						placeholder='Название книги*'
						error={errors?.title}
						{...register('title', { required: 'Название книги обязательно' })}
					/>
					<Field
						placeholder='Автор книги'
						error={errors?.author}
						{...register('author')}
					/>
					<Field
						placeholder='Описание книги'
						className='col-span-2'
						error={errors?.description}
						{...register('description')}
					/>
					<FieldTextArea
						placeholder='Текст книги*'
						error={errors?.text}
						{...register('text', {
							required: 'Текст книги обязателен',
							validate: (value: string) =>
								value.length > 50 ||
								'Текст книги должен быть больше 50 символов'
						})}
					/>

					<button className='button col-span-2' type='submit'>
						Сохранить
					</button>
					<div
						className={cn(
							'absolute inset-0 bg-gray-800 invisible opacity-1',
							isLoading && 'visible opacity-50 transition-all'
						)}
					></div>
				</form>
			)}
		</>
	)
}

export default FormCreateBook
