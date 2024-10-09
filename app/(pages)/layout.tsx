import React from 'react'

interface Ilayout {
	children: React.ReactNode
}

const layout = ({ children }: Ilayout) => {
	return (
		<div className='max-w-[76.875rem] px-[0.9375rem] mx-auto'>{children}</div>
	)
}

export default layout
