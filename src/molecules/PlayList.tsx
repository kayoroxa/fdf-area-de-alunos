import { useRouter } from 'next/router'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'
import { GoPlay } from 'react-icons/go'
import { _VideoData } from '../utils/types/_VideoData'

interface IProps {
  videosData: _VideoData[]
  onVideoSelect: (videoData: _VideoData) => void
  curVideo: _VideoData
  curModule: {
    name: string
    indexModule: number
  }
}

interface IPropsModuleHeader {
  moduleInfo: {
    name: string
    indexModule: number
    link?: string
  }
  shadow?: boolean
  arrow?: '<' | '>'
}

function ModuleHeader({
  moduleInfo,
  shadow = true,
  arrow,
}: IPropsModuleHeader) {
  const router = useRouter()
  let myClass =
    'p-4 bg-gray-600 flex gap-6 items-center border-separate border border-gray-500 border-opacity-30 '

  if (shadow) myClass += ' drop-shadow-xl'
  if (moduleInfo.link) myClass += ' hover:cursor-pointer hover:bg-gray-500'

  return (
    <div
      className={myClass}
      onClick={() => moduleInfo.link && router.push(moduleInfo.link)}
    >
      {arrow && (
        <div id="icon" className="h-full text-3xl">
          <div id="cadeado" className="wrapper-icon h-7">
            {arrow === '<' ? <FaLongArrowAltLeft /> : <FaLongArrowAltRight />}
          </div>
        </div>
      )}
      <div>
        <div id="name">{moduleInfo.name}</div>
        <div id="index" className=" text-sky-300 font-bold">
          Módulo: {('000' + moduleInfo.indexModule).slice(-3)}
        </div>
      </div>
    </div>
  )
}

export default function Playlist({
  videosData,
  onVideoSelect,
  curVideo,
  curModule,
}: IProps) {
  return (
    <div
      id="playlist"
      className="flex flex-col  w-full bg-gray-700 rounded-2xl overflow-hidden shadow-xl"
    >
      <ModuleHeader moduleInfo={curModule} />
      <div id="wrapper-tiras" className="pb-5">
        {videosData.map((videoData, i) => {
          const selected = curVideo.name === videoData.name
          return (
            <div
              key={i}
              id="tirinha-do-vid"
              className={`tirinhas ${
                videoData.allow
                  ? 'pointer-hover'
                  : 'hover:cursor-not-allowed opacity-30 border-opacity-90'
              } ${selected ? 'selected' : 'not-selected'}`}
              onClick={() => videoData.allow && onVideoSelect(videoData)}
            >
              <div
                id="aula-numero"
                className={`text-3xl py-2 px-3  text-gray-800 rounded-xl ${
                  selected ? 'bg-blue-300' : 'bg-gray-500'
                }`}
              >
                {i + 1}
              </div>
              <div className="flex flex-col flex-1">
                <p className=" text-lg capitalize">{videoData.name}</p>
                <p className=" text-xs">
                  {videoData.allow ? '15:05' : 'em breve'}
                </p>
              </div>

              {videoData.allow ? (
                <div id="play" className="wrapper-icon h-7">
                  <GoPlay />
                </div>
              ) : (
                <div id="cadeado" className="wrapper-icon h-7">
                  <GiPadlock />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="w-full drop-shadow-xl">
        <ModuleHeader
          moduleInfo={{
            name: 'Proximo módulo',
            indexModule: curModule.indexModule + 1,
            link: '/',
          }}
          shadow={false}
          arrow=">"
        />
        {curModule.indexModule - 1 >= 0 && (
          <ModuleHeader
            moduleInfo={{
              name: 'Voltar ao módulo anterior',
              indexModule: curModule.indexModule - 1,
              link: '/',
            }}
            shadow={false}
            arrow="<"
          />
        )}
      </div>
    </div>
  )
}
