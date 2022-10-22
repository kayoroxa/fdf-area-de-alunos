import MediaQuery from 'react-responsive'
import useModules from '../services/hooks/useModules'
import MobileHome from '../templates/MobileHome'
import PCHome from '../templates/PCHome'

export default function Home() {
  const { data: modules } = useModules()

  // if (status !== 'authenticated')
  return (
    <>
      <MediaQuery maxWidth={1020}>
        <MobileHome modules={modules || []} />
      </MediaQuery>
      <MediaQuery minWidth={1020}>
        <PCHome modules={modules || []} />
      </MediaQuery>
    </>
  )
}
