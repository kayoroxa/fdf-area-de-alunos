import { Lesson, Module, Video } from '@prisma/client'

export type _Module = Module

export type LessonWithVideos = Lesson & {
  videos?: Video[]
}

export type ModuleForPage = Module & {
  lessons: LessonWithVideos[]
}
