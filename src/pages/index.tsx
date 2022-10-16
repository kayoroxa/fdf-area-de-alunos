import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoPlay } from 'react-icons/go'
import { createClient } from '../../prismicio'

/* eslint-disable @next/next/no-img-element */

type _Module = {
  name: string
  imgUrl: string
  slug: string
}

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

function Module({ name, imgUrl, link }: any) {
  return (
    <Link href={link} passHref>
      <div className="flex flex-col card overflow-hidden rounded-3xl w-[286px] hover:cursor-pointer hover:scale-105 border-b-8 border-gray-700 shadow-bottom">
        <div className="h-[286px]">
          <img
            src={imgUrl}
            alt=""
            className="w-full min-w-full h-full min-h-full object-cover"
          />
        </div>
        <div className="flex g-4 flex-col bg-gray-600 px-4 py-5 text-lg justify-between gap-2 relative ">
          <GoPlay className="absolute left-8 -top-3 scale-[3] drop-shadow-icon" />
          <h2 className="text-2xl mt-3">{name}</h2>
          <div id="lessonCount" className="flex gap-2 text-sm">
            <span>📼</span>
            <span>56 Aulas</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Home = ({ modules }: IProps) => {
  const router = useRouter()
  return (
    <div className=" bg-gray-800 min-h-screen m-auto py-9 px-4 max-w-screen-sm flex flex-col gap-4">
      <div id="user-info" className="p-4">
        <p>
          <h3>Hello,</h3>
        </p>
        <div className="relative w-max">
          <h1 className="text-3xl font-bold">Caio Rocha</h1>
          <span className=" -right-20 absolute text-6xl bottom-0">👋🏽</span>
        </div>
      </div>

      <div id="user-progress" className="flex gap-9"></div>

      <div id="esteira" className="flex flex-wrap gap-5 justify-center">
        {modules.map(({ name, imgUrl, slug }, i) => (
          <Module
            link={`/modulo/${slug}`}
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
