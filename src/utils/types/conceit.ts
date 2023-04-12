type Ref<T> = {
  value: T
}

type Student = {
  name: string
  email: string
  password: string
  courses: Ref<Course>[]
}
type Course = {
  title: string
  description: string
}

type Module = {
  title: string
  description: string
  courseId: Ref<Course>
}

type ModuleProgress = {
  moduleId: Ref<Module>
  studentId: Ref<Student>
  completedLessons: number
}

type Lesson = {
  title: string
  description: string
  videoUrl: string
  moduleId: Ref<Module>
}

type LessonProgress = {
  lessonId: Ref<Lesson>
  studentId: Ref<Student>
  isCompleted: boolean
}
