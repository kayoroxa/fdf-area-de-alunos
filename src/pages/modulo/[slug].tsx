/* eslint-disable @next/next/no-img-element */

import MediaQuery from 'react-responsive'
import { useModule } from '../../services/hooks/useModules'
import MobileModule from '../../templates/MobileModule'
import PCModule from '../../templates/PCModule'

import { GetServerSideProps } from 'next'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useModuleStore } from '../../store/useModule'
import { ModuleForPage } from '../../utils/types/_Module'

interface ModulePageControl {
  dataModules: ModuleForPage[]
  uid: string
  indexCurModule: number
  setIndexCurModule: Dispatch<SetStateAction<number>>
}

export const modulePageControl = createContext<ModulePageControl>(
  {} as ModulePageControl
)

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context
  return {
    props: {
      query,
    },
  }
}

interface MyPageProps {
  query: { slug: string }
}

export default function ModuloPage({ query }: MyPageProps) {
  const [indexCurModule, setIndexCurModule] = useState(0)

  const slug = query.slug as string

  const { data: modulo } = useModule(slug)

  const { setCurModule } = useModuleStore()

  useEffect(() => {
    if (modulo) {
      console.log({ modulo })
      setCurModule(modulo)
    }
  }, [modulo, setCurModule])

  const moduloName = modulo?.name || '...'

  const lessons = modulo?.lessons || []

  if (!modulo || !slug || !modulo.lessons)
    return <div>{JSON.stringify({ modulo, slug })}</div>

  const params = {
    dataModules: [modulo],
    curModule: modulo,
    uid: String(slug),
    indexCurModule,
    setIndexCurModule,
  }

  return (
    <modulePageControl.Provider value={params}>
      <MediaQuery maxWidth={1020}>
        <MobileModule moduloName={moduloName} videosData={lessons} />
      </MediaQuery>

      <MediaQuery minWidth={1020}>
        <PCModule moduloName={moduloName} />
      </MediaQuery>
    </modulePageControl.Provider>
  )
}
