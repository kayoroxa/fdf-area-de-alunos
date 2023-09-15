// import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prismadb from '../../../utils/prismadb'

export async function GET(req: Request) {
  try {
    const body = await req.json()

    const { moduleId } = body

    if (!moduleId) {
      return new NextResponse('moduleId is required', { status: 400 })
    }

    const lessons = await prismadb.lesson.findMany({
      where: {
        module: {
          id: moduleId,
        },
        archived: false,
      },
      include: {
        UserLessonProgresses: {
          where: {
            user: {
              id: body.userId,
            },
          },
          select: {
            progress: true,
          },
        },
      },
    })

    return NextResponse.json(lessons)
  } catch (error) {
    console.log('[MODULE_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
