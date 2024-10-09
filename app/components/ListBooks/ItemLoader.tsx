'use client'

import React from 'react'

import Loader from '../ui/Loader'

export const ItemLoader = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
			<div className='flex justify-end flex-col-reverse gap-4 min-h-[9.375rem] bg-violet-200 rounded-lg p-[0.9375rem]'>
				<div className='flex flex-col justify-between space-y-2'>
					<Loader count={3} height={30} gap={15} />
				</div>
			</div>
			<div className='flex justify-end flex-col-reverse gap-4 min-h-[9.375rem] bg-violet-200 rounded-lg p-[0.9375rem]'>
				<div className='flex flex-col justify-between space-y-2'>
					<Loader count={3} height={30} gap={15} />
				</div>
			</div>
			<div className='flex justify-end flex-col-reverse gap-4 min-h-[9.375rem] bg-violet-200 rounded-lg p-[0.9375rem]'>
				<div className='flex flex-col justify-between space-y-2'>
					<Loader count={3} height={30} gap={15} />
				</div>
			</div>
		</div>
	)
}
