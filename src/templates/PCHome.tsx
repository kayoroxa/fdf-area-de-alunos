import HeaderWelcome from '../molecules/HeadWelcome'
import CardModule from '../organisms/Module'
import { _Module } from '../utils/types/_Module'

interface IProps {
  modules: _Module[]
}

export default function PCHome({ modules }: IProps) {
  return (
    <div className="bg-gray-900 h-screen w-screen py-6 px-6 flex gap-6 justify-center overflow-hidden">
      <section className="bg-gray-800 rounded-3xl  p-6">
        <HeaderWelcome />
      </section>

      <section className=" flex flex-col gap-6 bg-gray-800 rounded-3xl max-w-6xl px-6 overflow-y-auto overflow-x-hidden">
        <div className="progress h-96 py-4">
          <div className="w-full h-full bg-gray-700 rounded-3xl">Progress</div>
        </div>

        <div id="esteira" className="flex flex-wrap gap-5 justify-center ">
          {modules.map(({ name, imgUrl, slug }, i) => {
            return (
              <CardModule
                link={i === 0 ? `/modulo/${slug}` : false}
                key={i}
                name={name}
                imgUrl={imgUrl}
                status={i === 0 ? 'done' : 'blocked'}
                newsLessons={i === 0 ? true : false}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
