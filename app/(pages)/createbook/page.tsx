'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

import FormCreateBook from '@/app/components/FormCreateBook/FormCreateBook'

// Интерфейс для данных формы
interface ICreateFields {
	title: string
	author: string
	description: string
	text: string
}

// Компонент формы создания книги
const CreateBookPage = () => {
	const {
		register, // для регистрации полей формы
		handleSubmit, // для обработки отправки формы
		formState: { errors }, // для работы с ошибками валидации
		reset // для сброса формы
	} = useForm<ICreateFields>()

	const queryClient = useQueryClient() // для сброса кэша запросов после успешного создания книги

	// Мутация для создания книги
	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: async (newBook: ICreateFields) => {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}`,
				newBook
			)
			return response.data
		},
		onSuccess: () => {
			// Инвалидируем кэш для обновления данных
			queryClient.invalidateQueries({ queryKey: ['books'] })
			reset() // Сбрасываем форму после успешного создания
		}
	})

	// Функция, которая будет вызвана при отправке формы
	const onSubmit = (data: ICreateFields) => {
		mutate(data) // вызываем мутацию с данными формы
	}

	return (
		<section className='pt-4'>
			<h1 className='text-3xl font-bold text-center mb-4'>Создание книги</h1>

			<FormCreateBook
				handleSubmit={handleSubmit}
				onSubmit={onSubmit}
				register={register}
				errors={errors}
				isLoading={isPending}
				isError={isError}
				error={error}
			/>
		</section>
	)
}

export default CreateBookPage
