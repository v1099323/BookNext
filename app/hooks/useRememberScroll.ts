import { FC, useEffect, useState } from 'react'

interface IUseRememberScroll {
	scrollRestored: boolean
}

export const useRememberScroll = ({ data, params }: any): IUseRememberScroll => {
	const [scrollRestored, setScrollRestored] = useState(false)

	// Сохраняем позицию скролла при каждом скролле
	useEffect(() => {
		const handleScroll = () => {
			localStorage.setItem(
				`scrollPosition-${params.id}`,
				String(window.scrollY)
			)
		}

		// Добавляем обработчик скролла
		window.addEventListener('scroll', handleScroll)

		// Удаляем обработчик при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [params.id])

	// Восстанавливаем позицию скролла после загрузки данных
	useEffect(() => {
		if (data) {
			const savedScrollPosition = localStorage.getItem(
				`scrollPosition-${params.id}`
			)
			if (savedScrollPosition) {
				setTimeout(() => {
					window.scrollTo(0, parseInt(savedScrollPosition, 10))
					setScrollRestored(true)

					// Убираем уведомление через 3 секунды
					setTimeout(() => {
						setScrollRestored(false)
					}, 3000)
				}, 100) // Задержка для полной загрузки данных
			}
		}
	}, [data, params.id])

	return { scrollRestored }
}
