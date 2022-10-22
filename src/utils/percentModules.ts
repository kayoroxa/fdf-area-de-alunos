import { _Module } from './types/_Module'
import { _User } from './types/_User'

export default function percentModules(
  userData: _User,
  modulesData: _Module[]
) {
  const attendedLessonsIDs = userData.attendedClasses.map(v => v.id)

  const percentModules = modulesData.map(({ lessons, slug: module_slug }) => {
    if (!lessons || lessons?.length === 0)
      return {
        moduleId: module_slug,
        percent: 0,
      }

    const filtered = lessons.filter(({ id }) => attendedLessonsIDs.includes(id))

    return {
      moduleId: module_slug,
      percent: (filtered.length * 100) / lessons.length,
    }
  })

  return percentModules
}
