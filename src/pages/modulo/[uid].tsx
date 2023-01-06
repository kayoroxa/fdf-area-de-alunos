/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router'
import MediaQuery from 'react-responsive'
import useModules from '../../services/hooks/useModules'
import MobileModule from '../../templates/MobileModule'
import PCModule from '../../templates/PCModule'

import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { _Module } from '../../utils/types/_Module'
import { _VideoData } from '../../utils/types/_VideoData'

interface ModulePageControl {
  dataModules: _Module[]
  curModule: _Module
  uid: string
  indexCurModule: number
  setIndexCurModule: Dispatch<SetStateAction<number>>
  curVideo: _VideoData
  setCurVideo: Dispatch<SetStateAction<_VideoData>>
  videosData: _VideoData[]
}

export const modulePageControl = createContext<ModulePageControl>(
  {} as ModulePageControl
)

export default function ModuloPage() {
  const [indexCurModule, setIndexCurModule] = useState(0)

  const { data: dataModules } = useModules()
  const router = useRouter()
  const { uid } = router.query

  const modulo = dataModules?.find(v => v.slug === uid)

  const moduloName = modulo?.name || '...'

  const videosData = modulo?.lessons || []

  const [curVideo, setCurVideo] = useState(videosData[0])

  if (!dataModules || !modulo || !uid) return <div>Erro 346</div>

  const params = {
    dataModules,
    curModule: modulo,
    uid: String(uid),
    indexCurModule,
    setIndexCurModule,
    videosData,
    curVideo,
    setCurVideo,
  }

  return (
    <modulePageControl.Provider value={params}>
      <MediaQuery maxWidth={1020}>
        <MobileModule moduloName={moduloName} videosData={videosData} />
      </MediaQuery>

      <MediaQuery minWidth={1020}>
        <PCModule moduloName={moduloName} videosData={videosData} />
      </MediaQuery>
    </modulePageControl.Provider>
  )
}
