import { create } from 'zustand'
import { LessonWithVideos, ModuleForPage } from '../utils/types/_Module'

interface MyState {
  curModule: ModuleForPage
  setCurModule: (module: ModuleForPage) => void

  // lessons: LessonWithVideos[]
  // setLessons: (lessons: LessonWithVideos[]) => void

  curLesson: LessonWithVideos
  setCurLesson: (lesson: LessonWithVideos) => void
}

export const useModuleStore = create<MyState>()((set, get) => ({
  curModule: {} as ModuleForPage,
  setCurModule: curModule => set({ curModule }),

  // lessons: [],
  // setLessons: lessons => set({ lessons }),

  curLesson: {} as LessonWithVideos,
  setCurLesson: curLesson => set({ curLesson }),
}))
