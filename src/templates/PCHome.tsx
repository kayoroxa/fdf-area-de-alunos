/* eslint-disable @next/next/no-img-element */
import Poster from '../molecules/Poster'
import CardModule from '../organisms/Module'
import SideBar from '../organisms/SideBar'
import { _Module } from '../utils/types/_Module'

//twin

interface IProps {
  modules: _Module[]
}

export default function PCHome({ modules }: IProps) {
  return (
    <div className="bg-gray-800 h-screen w-screen  flex justify-center overflow-hidden">
      <SideBar />
      <section className="flex-1 max-w-screen-[2000px] px-8 overflow-y-auto overflow-x-hidden">
        <Poster src="https://images8.alphacoders.com/107/thumb-1920-1074175.png" />

        <div
          id="esteira"
          className="flex flex-wrap gap-7 xl:gap-8 justify-center mb-6"
        >
          {modules.map(({ name, imgUrl, slug }, i) => {
            return (
              <>
                <CardModule
                  link={i === 0 ? `/modulo/${slug}` : false}
                  key={i}
                  name={name}
                  imgUrl={imgUrl}
                  status={i === 0 ? 'done' : 'blocked'}
                  newsLessons={i === 0 ? true : false}
                  index={i + 1}
                />
                <CardModule
                  link={i === 0 ? `/modulo/${slug}` : false}
                  key={i}
                  name={name}
                  imgUrl={imgUrl}
                  status={i === 0 ? 'done' : 'blocked'}
                  newsLessons={i === 0 ? true : false}
                  index={i + 1}
                />
                <CardModule
                  link={i === 0 ? `/modulo/${slug}` : false}
                  key={i}
                  name={name}
                  imgUrl={imgUrl}
                  status={i === 0 ? 'done' : 'blocked'}
                  newsLessons={i === 0 ? true : false}
                  index={i + 1}
                />
              </>
            )
          })}
        </div>
      </section>
    </div>
  )
}
