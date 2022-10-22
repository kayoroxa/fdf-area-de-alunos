import { useQuery } from 'react-query'
import { _Module } from '../../utils/types/_Module'

async function getModules() {
  const data = await fetch('/api/modules').then(r => r.json())

  const result: _Module[] = data.map((myModule: any) => ({
    slug: myModule.slug,
    name: myModule.name,
    imgUrl: myModule.imgUrl,
    lessons: myModule.lessons || [],
  }))

  return result
}

export default function useModules() {
  return useQuery('modules', getModules, { staleTime: 1000 * 60 * 5 })
}
