import { Lesson, Module, Video } from '@prisma/client'
import { _VideoData } from './_VideoData'

export type _Module = {
  name: string
  imgUrl: string
  slug: string
  lessons?: _VideoData[]
  index?: number
}

export type LessonWithVideos = Lesson & {
  videos: Video[]
}

export type ModuleForPage = Module & {
  lessons: LessonWithVideos[]
}
