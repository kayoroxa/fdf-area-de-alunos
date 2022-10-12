/* eslint-disable @next/next/no-img-element */

import PCModule from '../../templates/PCModule'

interface IModulo {
  response: {
    title: string
    thumbnail: {
      dimensions: { width: number; height: number }
      alt?: string
      copyright?: string
      url: string
    }
    day_released: 0
    slices: {
      primary: {
        title: any
        description: []
        video_url: any
        day_released: 0
      }
    }[]
  }
}

export default function ModuloPage({ response }: IModulo) {
  return (
    <PCModule
      moduloName="4 anos em 1 módulo"
      videosData={[
        {
          name: 'Tudo sobre pronomes ( he | him | his )',
          allow: true,
          videoUrl: '/1.mp4',
        },
        {
          name: 'Entenda qualquer tempo do inglês (Códigos)',
          allow: true,
          videoUrl: '/2.mp4',
        },
        {
          name: 'Como usar o can e could',
          allow: true,
          videoUrl: '/4.mp4',
        },
        {
          name: 'Verbo to be em apenas 8 minutos',
          allow: false,
          videoUrl: '/3.mp4',
        },
        {
          name: 'Todas as contrações do inglês',
          allow: false,
          videoUrl: '/3.mp4',
        },
      ]}
    />
  )
  return (
    <div>
      <h1>{response.title}</h1>
      <img src={response.thumbnail.url} alt="imagem" height={300} />

      <div id="cursos" className="flex w-full bg-green-500 gap-10">
        {response.slices.map((v, i) => (
          <div key={i} className="flex">
            <h2>{v.primary.title}</h2>
            <video width="400" height="200" controls>
              <source src={v.primary.video_url.url} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  )
}

// export async function getServerSideProps() {
//   const client = prismic.createClient(sm.apiEndpoint)
//   const response = await client.getByUID('module', 'modulo1')
//   console.log(response.data.slices)
//   return {
//     props: {
//       response: response.data,
//     },
//   }
// }
