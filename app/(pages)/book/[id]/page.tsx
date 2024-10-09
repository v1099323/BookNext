'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import Loader from '@/app/components/ui/Loader'

import { useRememberScroll } from '@/app/hooks/useRememberScroll'

const fetchBook = async (id: string) => {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${id}`)
	return response.data.data
}

const BookPage = ({ params }: { params: { id: string } }) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['singlebook', params.id],
		queryFn: () => fetchBook(params.id)
	})

	const { scrollRestored } = useRememberScroll({ data, params })

	if (isLoading) return <Loader count={4} height={50} />
	if (error) return <div>Error loading book</div>

	return (
		<div>
			{/* Уведомление о восстановлении позиции скролла */}
			{scrollRestored && (
				<div className='fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md'>
					Вы вернулись к последнему месту чтения
				</div>
			)}

			<div>
				<h1 className='text-3xl font-bold text-center py-4'>{data.title}</h1>
				<p className='text-xl text-center mb-4'>{data.description}</p>
				<div className='text-lg'>{data.text}</div>
			</div>
		</div>
	)
}

export default BookPage
