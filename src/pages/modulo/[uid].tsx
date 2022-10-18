/* eslint-disable @next/next/no-img-element */

import MediaQuery from 'react-responsive'
import { createClient } from '../../../prismicio'
import MobileModule from '../../templates/MobileModule'
import PCModule from '../../templates/PCModule'

interface IModulo {
  data: {
    name: string
    allow: boolean
    videoUrl: string
  }[]
}

export async function getServerSideProps({ params, previewData }: any) {
  const client = createClient({ previewData })
  const response = await client.getByUID('module', params.uid)

  let data: any = []

  for (let rawData of response.data.slices) {
    const { primary } = rawData

    // const response: any = await fetch(primary.video_url.url)
    // const newURL: string =
    //   response[Object.getOwnPropertySymbols(response)[1]].url

    data.push({
      name: primary.title,
      allow: true,
      videoUrl: primary.video_url.url,
    })
  }

  // const data = response.data.slices.map(({ primary }: any) => {
  //   fetch(
  //     'https://docs.google.com/uc?export=open&id=17nyS2ZYEd6xaUqANv4FDNawn-4OS3Dut'
  //   )
  //     .then(
  //       (response: any) =>
  //         response[Object.getOwnPropertySymbols(response)[1]].url
  //     )
  //     .then(data => console.log(data))

  //   return {
  //     name: primary.title,
  //     allow: true,
  //     videoUrl: primary.video_url.url,
  //   }
  // })

  // fetch(response.data.slices[0].primary.video_url.url)
  //   .then(res => {
  //     debugger
  //     return res.text()
  //   })
  //   .then(data => console.log(data))

  return {
    props: {
      data,
    },
  }
}

export default function ModuloPage({ data }: IModulo) {
  return (
    <>
      <MediaQuery maxWidth={1020}>
        <MobileModule moduloName="4 anos em 1 módulo" videosData={data} />
      </MediaQuery>

      <MediaQuery minWidth={1020}>
        <PCModule moduloName="4 anos em 1 módulo" videosData={data} />
      </MediaQuery>
    </>
  )
}
