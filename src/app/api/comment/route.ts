// import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prismadb from '../../../utils/prismadb'

export async function POST(req: Request) {
  try {
    // const { userId } = auth()

    const body = await req.json()

    const { content, lessonId, userId, replyToId, isTeacher } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!content) {
      return new NextResponse('content is required', { status: 400 })
    }
    if (!lessonId) {
      return new NextResponse('lessonId is required', { status: 400 })
    }

    const createdComment = await prismadb.comment.create({
      data: {
        content,
        revised: isTeacher ? true : false,
        archived: false,
        replyTo: {
          connect: {
            id: replyToId,
          },
        },
        lesson: {
          connect: {
            id: lessonId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    })

    return NextResponse.json(createdComment)
  } catch (error) {
    console.log('[COMMENT_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const body = await req.json()

    const { lessonId } = body

    if (!lessonId) {
      return new NextResponse('lessonId is required', { status: 400 })
    }

    const comments = await prismadb.comment.findMany({
      where: {
        revised: true,
        lesson: {
          id: lessonId,
          areCommentsAllowed: true,
        },
      },
      include: {
        user: true,
      },
    })

    return NextResponse.json(comments)
  } catch (error) {
    console.log('[COMMENT_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
