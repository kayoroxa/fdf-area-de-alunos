import { useRouter } from 'next/router'
import { useContext } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'
import { GoPlay } from 'react-icons/go'
import { modulePageControl } from '../pages/modulo/[slug]'
import useModules from '../services/hooks/useModules'
import { useModuleStore } from '../store/useModule'
import { _VideoData } from '../utils/types/_VideoData'

interface IProps {
  videosData?: _VideoData[]
  onVideoSelect?: (videoData: _VideoData) => void
  curVideo?: _VideoData
  curModule?: {
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
  const { setIndexCurModule } = useContext(modulePageControl)

  const { curModule, setCurLesson } = useModuleStore()
  const lessons = curModule.lessons

  let myClass =
    'p-4 bg-gray-600 flex gap-6 items-center border-separate border border-gray-500 border-opacity-30 '

  if (shadow) myClass += ' drop-shadow-xl'
  if (moduleInfo.link) myClass += ' hover:cursor-pointer hover:bg-gray-500'

  function handleClick() {
    if (moduleInfo.link) {
      router.push(moduleInfo.link)
      setIndexCurModule(moduleInfo.indexModule)

      // const lessons = dataModules[moduleInfo.indexModule]. || []
      setCurLesson((lessons || [])[0])
    }
  }

  return (
    <div className={myClass} onClick={handleClick}>
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
          Módulo: {('000' + (moduleInfo.indexModule + 1)).slice(-3)}
        </div>
      </div>
    </div>
  )
}

export default function Playlist({}: IProps) {
  const { data: dataModules } = useModules()

  const { curModule, setCurLesson, curLesson } = useModuleStore()

  const lessons = curModule.lessons
  if (curModule.order === null) return <div>Erro 489</div>

  const nextModule = dataModules?.[curModule.order + 1]
  const prevModule = dataModules?.[curModule.order - 1]
  const showIndex = curModule.order + 1

  if (!lessons) {
    return <div>Não tem Lessons, {JSON.stringify(curModule)}</div>
  }

  return (
    <div
      id="playlist"
      className="flex flex-col  w-full bg-gray-700 rounded-2xl overflow-hidden shadow-xl"
    >
      <ModuleHeader
        moduleInfo={{
          name: curModule.name,
          indexModule: curModule.order,
        }}
      />
      <div id="wrapper-tiras" className="pb-5">
        {lessons.map((lesson, i) => {
          const selected = curLesson.id === lesson.id
          return (
            <div
              key={i}
              id="tirinha-do-vid"
              className={`tirinhas ${
                !lesson.archived
                  ? 'pointer-hover'
                  : 'hover:cursor-not-allowed opacity-30 border-opacity-90'
              } ${selected ? 'selected' : 'not-selected'}`}
              onClick={() => lesson.archived && setCurLesson(lesson)}
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
                <p className=" text-lg capitalize">{lesson.name}</p>
                <p className=" text-xs">
                  {lesson.archived ? '15:05' : 'em breve'}
                </p>
              </div>

              {lesson.archived && !selected && (
                <div id="play" className="wrapper-icon h-7">
                  <GoPlay />
                </div>
              )}
              {!lesson.archived && (
                <div id="cadeado" className="wrapper-icon h-7">
                  <GiPadlock />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="w-full drop-shadow-xl">
        {dataModules && curModule.order + 1 < dataModules.length && (
          <ModuleHeader
            moduleInfo={{
              name: 'Proximo módulo',
              indexModule: curModule.order + 1,
              link: '/modulo/' + nextModule?.slug,
            }}
            shadow={false}
            arrow=">"
          />
        )}
        {curModule.order - 1 >= 0 && (
          <ModuleHeader
            moduleInfo={{
              name: 'Voltar ao módulo anterior',
              indexModule: curModule.order - 1,
              link: '/modulo/' + prevModule?.slug,
            }}
            shadow={false}
            arrow="<"
          />
        )}
      </div>
    </div>
  )
}
