import Link from 'next/link'

import ListBooks from '@/app/components/ListBooks/ListBooks'

export default function Home() {
	return (
		<div className='pt-4'>
			{/* Search */}

			{/* Createbook */}
			<Link className='button mb-4 w-full' href='/createbook'>
				Создать книгу
			</Link>
			{/* ListBooks */}
			<ListBooks />
		</div>
	)
}
