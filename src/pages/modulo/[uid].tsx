/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router'
import MediaQuery from 'react-responsive'
import useModules from '../../services/hooks/useModules'
import MobileModule from '../../templates/MobileModule'
import PCModule from '../../templates/PCModule'

export default function ModuloPage() {
  const { data: dataModules } = useModules()
  const router = useRouter()
  const { uid } = router.query

  const modulo = dataModules?.find(v => v.slug === uid)

  const moduloName = modulo?.name || '...'

  const videosData = modulo?.lessons || []

  return (
    <>
      <MediaQuery maxWidth={1020}>
        <MobileModule moduloName={moduloName} videosData={videosData} />
      </MediaQuery>

      <MediaQuery minWidth={1020}>
        <PCModule moduloName={moduloName} videosData={videosData} />
      </MediaQuery>
    </>
  )
}
