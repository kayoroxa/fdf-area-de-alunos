import { useRouter } from 'next/router'

/* eslint-disable @next/next/no-img-element */
export async function getServerSideProps() {
  // const client = prismic.createClient(sm.apiEndpoint)
  // const response = await client.getByUID('module', 'modulo1')

  // console.log(response)
  const modules = [
    {
      name: '4 ano em 1 módulo',
      imgUrl: '/1.jpg',
    },
    {
      name: 'comece seu listening',
      imgUrl: '/2.jpg',
    },
    {
      name: 'fique bom no listening',
      imgUrl: '/3.jpg',
    },
    {
      name: 'treine seu speak',
      imgUrl: '/1.jpg',
    },
    {
      name: 'treine seu speak',
      imgUrl: '/1.jpg',
    },
  ]

  return {
    props: {
      modules,
    },
  }
}

interface IProps {
  modules: {
    name: string
    imgUrl: string
  }[]
}

function Module({ name, imgUrl, onClick }: any) {
  return (
    <div
      className="flex flex-col card rounded-3xl overflow-hidden hover:cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <div className=" h-4/6">
        <img
          src={imgUrl}
          alt=""
          className="w-full min-w-full h-full min-h-full object-cover"
        />
      </div>
      <div className="flex-1 flex  flex-col bg-slate-400 p-4 text-lg justify-between">
        <h2>{name}</h2>
        <div id="lessonCount" className="flex gap-2 text-sm">
          <span>📼</span>
          <span>56 Aulas</span>
        </div>
      </div>
    </div>
  )
}

const Home = ({ modules }: IProps) => {
  const router = useRouter()
  return (
    <div className=" bg-slate-800 min-h-screen m-auto py-9 px-4 max-w-screen-sm flex flex-col gap-4">
      <div id="user-info" className="p-4">
        <p>
          <h3>Hello,</h3>
        </p>
        <p className="relative w-max">
          <h1 className="text-3xl font-bold">Caio Rocha</h1>
          <span className=" -right-20 absolute text-6xl bottom-0">👋🏽</span>
        </p>
      </div>

      <div id="user-progress" className="flex gap-9"></div>

      <div id="esteira" className="flex flex-wrap gap-5 justify-center">
        {modules.map(({ name, imgUrl }, i) => (
          <Module
            onClick={() => router.push('/modulo/modulo1')}
            key={i}
            name={name}
            imgUrl={imgUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
