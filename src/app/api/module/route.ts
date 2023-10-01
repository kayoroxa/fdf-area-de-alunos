// import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prismadb from '../../../utils/prismadb'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('useId')

    if (!userId) {
      return new NextResponse('userId is required', { status: 400 })
    }

    const modulesWithProgress = await prismadb.module.findMany({
      where: {
        archived: false,
      },
      include: {
        UserModuleProgress: {
          where: {
            user: { id: userId }, // Substitua userId pelo ID do usuário atual
          },
          select: {
            completedLessons: true,
          },
        },
      },
    })

    // const modulesWithPercentage = modulesWithProgress.map(module => {
    //   const totalLessons = module.totalLessons // Contagem total de lições no módulo
    //   const completedLessons =
    //     module.UserModuleProgress[0]?.completedLessons || 0
    //   const percentageCompletion = (completedLessons / totalLessons) * 100

    //   return {
    //     ...module,
    //     percentageCompletion,
    //   }
    // })

    return NextResponse.json(modulesWithProgress)
  } catch (error) {
    console.log('[MODULE_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
