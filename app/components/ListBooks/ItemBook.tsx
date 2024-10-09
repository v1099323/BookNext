'use client'

import { QueryClient, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import cn from 'clsx'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { IBook } from '@/types/book.interface'

export const ItemBook = ({ id, title, description, image }: IBook) => {
	const queryClient = new QueryClient()
	const deleteBook = async (id: string) => {
		await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}${id}`)
	}

	const { mutate, isPending } = useMutation({
		mutationKey: ['deleteBook'],
		mutationFn: deleteBook,

		// Оптимистичное обновление
		onMutate: async (id: string) => {
			await queryClient.cancelQueries({ queryKey: ['books'] })
			const previousBooks = queryClient.getQueryData<IBook[]>(['books'])

			if (previousBooks) {
				queryClient.setQueryData(
					['books'],
					previousBooks.filter(book => book.id !== id)
				)
			}

			return { previousBooks }
		},

		onError: (error, id, context) => {
			if (context?.previousBooks) {
				queryClient.setQueryData(['books'], context.previousBooks)
			}
			console.error('Ошибка удаления книги', error)
		},

		onSuccess: () => {
			console.log('Книга успешно удалена')
		},

		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['books'] })
		}
	})

	return (
		<div
			className={cn(
				'flex justify-end flex-col-reverse gap-4 min-h-[9.375rem] bg-violet-200 rounded-lg p-[0.9375rem]',
				isPending && 'loader'
			)}
			key={id}
		>
			<div className='flex flex-col h-[100%] justify-between space-y-2'>
				<div className='flex gap-3 justify-between items-start'>
					<div className=''>
						<Link className='self-start' href={`/book/${id}`}>
							<h3 className='text-2xl font-bold hover:underline'>{title}</h3>
						</Link>
						<p className='text-sm description flex-1'>{description}</p>
					</div>
					<button onClick={() => mutate(id)}>
						<Trash2 className='w-6 h-6 text-black transition-colors hover:text-red-500' />
					</button>
				</div>
				<Link className='button' href={`/book/${id}`}>
					Читать книгу
				</Link>
			</div>
			{image && (
				<Link
					className='relative overflow-hidden aspect-[16/9] rounded-lg'
					href={`/book/${id}`}
				>
					<Image
						className='object-cover transition-transform hover:scale-105'
						src={image}
						alt={title}
						fill
					/>
				</Link>
			)}
		</div>
	)
}
