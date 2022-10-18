import MediaQuery from 'react-responsive'
import { createClient } from '../../prismicio'
import MobileHome from '../templates/MobileHome'
import PCHome from '../templates/PCHome'
import { _Module } from '../utils/types/_Module'

interface IProps {
  modules: _Module[]
}

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData })
  const response = await client.getByType('module')

  const modules: _Module[] = response.results.map(({ data, slugs }) => {
    return {
      slug: slugs[0],
      name: data.title,
      imgUrl: data.thumbnail.url,
    }
  })

  return {
    props: {
      modules,
    },
  }
}

export default function Home({ modules }: IProps) {
  return (
    <>
      <MediaQuery maxWidth={1020}>
        <MobileHome modules={modules} />
      </MediaQuery>
      <MediaQuery minWidth={1020}>
        <PCHome modules={modules} />
      </MediaQuery>
    </>
  )
}
