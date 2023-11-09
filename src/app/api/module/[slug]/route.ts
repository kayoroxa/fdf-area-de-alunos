// import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prismadb from '../../../../utils/prismadb'
import { ModuleForPage } from '../../../../utils/types/_Module'

interface Context {
  params: { slug: string }
}

export async function GET(req: Request, { params }: Context) {
  //param folder

  try {
    const slug = params.slug
    // const { searchParams } = new URL(req.url)
    // const userId = searchParams.get('useId')

    // if (!userId) {
    //   return new NextResponse('userId is required', { status: 400 })
    // }

    const modulesWithProgress: ModuleForPage | null =
      await prismadb.module.findUnique({
        where: {
          slug,
        },
        include: {
          lessons: {
            include: {
              videos: true,
            },
          },
          // UserModuleProgress: {
          //   where: {
          //     user: { id: 'fe208b5b-a3ef-4103-8bb0-0fb88f1a76dd' }, // Substitua userId pelo ID do usuário atual
          //   },
          //   select: {
          //     completedLessons: true,
          //   },
          // },
        },
      })

    return NextResponse.json(modulesWithProgress)
  } catch (error) {
    console.log('[MODULE_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
