import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import Footer from './components/Footer/Footer'
import Header from './components/header/Header'

import './globals.css'
import MainProvider from './providers/MainProvider'

const NunitoSans = Nunito_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-nunito',
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif']
})

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
			<body className={`${NunitoSans.variable} antialiased`}>
				<Header />
				<MainProvider>
					<main>{children}</main>
				</MainProvider>
				<Footer />
			</body>
		</html>
	)
}
