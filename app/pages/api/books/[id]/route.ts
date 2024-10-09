import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()
export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = params

	try {
		const book = await prisma.book.findUnique({
			where: { id }
		})

		if (!book) {
			return NextResponse.json(
				{ success: false, message: 'Book not found' },
				{ status: 404 }
			)
		}

		return NextResponse.json({ success: true, data: book }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: 'Error fetching book' },
			{ status: 500 }
		)
	}
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
	try {
		const { id } = params

		// Проверяем, что передан id
		if (!id) {
			return NextResponse.json(
				{ success: false, error: 'Book ID is required' },
				{ status: 400 }
			)
		}

		// Удаляем книгу с использованием Prisma
		const deletedBook = await prisma.book.delete({
			where: { id }
		})

		return NextResponse.json({ success: true, data: deletedBook }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: 'Error deleting book' },
			{ status: 500 }
		)
	}
}