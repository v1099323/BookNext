import React from 'react'

const Footer = () => {
	return (
		<footer className='py-4 bg-violet-300'>
			<div className='flex flex-wrap justify-center items-center gap-4'>
				<span className='font-bold text-lg'>ViolettCompany</span>
				<span className=' text-violet-900'>
					copyright &copy; {new Date().getFullYear()}
				</span>
			</div>
		</footer>
	)
}

export default Footer
