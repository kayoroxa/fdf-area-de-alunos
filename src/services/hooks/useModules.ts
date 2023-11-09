import { Module } from '@prisma/client'
import { useQuery } from 'react-query'
import { ModuleForPage, _Module } from '../../utils/types/_Module'

async function getModules() {
  const data = await fetch('/api/module/?useId=1').then(r => r.json())

  const result: _Module[] = data.map((myModule: Module, index: number) => ({
    slug: myModule.slug,
    name: myModule.name,
    imgUrl: myModule.imageUrl || '',
    lessons: [],
    // index: myModule.order,
    index,
  }))

  return result
}

export default function useModules() {
  return useQuery('modules', () => getModules(), {
    staleTime: 1000 * 60 * 60 * 1,
    refetchOnWindowFocus: false,
  })
}

interface Props {
  slug?: string
}

async function getModule({ slug }: Props) {
  console.log(slug)
  const myModule: ModuleForPage = await fetch(`/api/module/${slug}`).then(r =>
    r.json()
  )

  const result: ModuleForPage = {
    ...myModule,
  }

  return result
}

export function useModule(slug: string) {
  return useQuery('module', () => getModule({ slug }), {
    staleTime: 1000 * 60 * 60 * 1,
    refetchOnWindowFocus: false,
  })
}
