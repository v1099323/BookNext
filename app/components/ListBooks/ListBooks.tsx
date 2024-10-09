'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

import { ItemBook } from './ItemBook'
import { ItemLoader } from './ItemLoader'
import { IBook } from '@/types/book.interface'

const ListBooks = () => {
	const { data, error, isLoading } = useQuery<IBook[], Error>({
		queryKey: ['books'],
		queryFn: async () => {
			return await axios
				.get(`${process.env.NEXT_PUBLIC_API_URL}`)
				.then(res => res.data.data)
		}
	})

	if (isLoading) return <ItemLoader />
	if (error) return <div>Error loading books: {error.message}</div>

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
			{data?.map(({ id, title, description }) => (
				<ItemBook
					key={id}
					id={id}
					title={title}
					description={description || ''}
				/>
			))}
		</div>
	)
}

export default ListBooks
