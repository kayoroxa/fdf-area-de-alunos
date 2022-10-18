import HeaderWelcome from '../molecules/HeadWelcome'
import CardModule from '../organisms/Module'
import { _Module } from '../utils/types/_Module'

interface IProps {
  modules: _Module[]
}

export default function MobileHome({ modules }: IProps) {
  return (
    <div className=" bg-gray-800 min-h-screen m-auto py-9 px-4 max-w-screen-sm flex flex-col gap-4">
      <HeaderWelcome />
      <div id="user-progress" className="flex gap-9"></div>

      <div id="esteira" className="flex flex-wrap gap-5 justify-center">
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
    </div>
  )
}
