import type { Metadata } from 'next'


import Footer from './components/Footer/Footer'
import Header from './components/header/Header'

import './globals.css'
import MainProvider from './providers/MainProvider'

export const metadata: Metadata = {
	title: "My Father's Books",
	description: 'Mini books app for my father'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className='antialiased'>
				<Header />
				<MainProvider>
					<main>{children}</main>
				</MainProvider>
				<Footer />
			</body>
		</html>
	)
}
