/* eslint-disable @next/next/no-img-element */
import HeaderWelcome from '../molecules/HeadWelcome'
import Poster from '../molecules/Poster'
import CardModule from '../organisms/Module'
import { _Module } from '../utils/types/_Module'

interface IProps {
  modules: _Module[]
  isLoading: boolean
}

export default function MobileHome({ modules, isLoading }: IProps) {
  return (
    <div className=" bg-gray-800 min-h-screen m-auto py-9 md:px-20 px-4 max-w-screen flex flex-col gap-4">
      <HeaderWelcome />

      <div id="user-progress" className="flex gap-9"></div>
      <Poster src="https://images8.alphacoders.com/107/thumb-1920-1074175.png" />

      <div id="esteira" className="flex flex-wrap gap-5 justify-center">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          modules.map(({ name, imgUrl, slug }, i) => {
            return (
              <CardModule
                link={`/modulo/${slug}`}
                key={i}
                name={name}
                imgUrl={imgUrl}
                status={'watching'}
                newsLessons={i === 0 ? true : false}
                index={i + 1}
              />
            )
          })
        )}
      </div>
    </div>
  )
}
