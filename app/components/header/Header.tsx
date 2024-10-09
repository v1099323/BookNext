import Link from 'next/link'
import React from 'react'

const Header = () => {
	return (
		<header className='py-2 min-h-[4.375rem] md:min-h-[5.625rem] bg-violet-300'>
			<div className='container px-[0.9375rem] mx-auto flex justify-between items-center'>
				<div>
					<button type='button' className='menu__icon icon-menu'>
						<span></span>
					</button>
					<nav>
						<ul className='flex flex-wrap gap-4'>
							<li>
								<Link
									className='text-lg hover:underline text-[#1f1f1f]'
									href='/'
								>
									Главная
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
