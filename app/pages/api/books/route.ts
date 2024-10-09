import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
	try {
		const body = await req.json() // Получаем данные из запроса
		const { title, author, description, text } = body

		// Проверяем, что все необходимые поля заполнены
		if (!title || !text) {
			return NextResponse.json(
				{ success: false, error: 'All fields are required' },
				{ status: 400 }
			)
		}

		// Создаем новую книгу с использованием Prisma
		const newBook = await prisma.book.create({
			data: {
				title,
				author,
				description,
				text
			}
		})

		return NextResponse.json({ success: true, data: newBook }, { status: 201 })
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: 'Error creating book' },
			{ status: 500 }
		)
	}
}

export async function GET() {
	try {
		const books = await prisma.book.findMany()
		return NextResponse.json({ success: true, data: books }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: 'Error fetching books' },
			{ status: 400 }
		)
	}
}
