import { useMemo } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import useModules from '../services/hooks/useModules'
import useUsers from '../services/hooks/useUsers'

/* eslint-disable @next/next/no-img-element */
export default function Poster({ src }: { src: string }) {
  const { data: modules } = useModules()
  const { data: user } = useUsers()

  const last = useMemo(() => {
    const lastLesson = user?.attendedClasses.slice(-1)[0]
    const lastModule = modules?.find(m =>
      m.lessons?.find(l => l.id === lastLesson?.id)
    )

    return {
      lesson: lastLesson,
      module: lastModule,
    }
  }, [user?.attendedClasses, modules])

  return (
    <main className="progress py-6 h-[350px] md:h-[450px] lg:h-[500px]  w-full max-w-[1300px] mx-auto relative group">
      <article className="absolute bottom-14 md:bottom-20 left-4 xl:left-20 lg:left-10 flex flex-col gap-6 max-w-xs xl:max-w-md z-40">
        <p className="xl:text-xl  flex gap-5 items-center">
          <span className="border border-sky-500 px-5 py-2 rounded-lg font-light">
            {last.lesson?.attendedDate
              ? new Date(last.lesson?.attendedDate).toLocaleDateString(
                  'pt-BR',
                  {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  }
                )
              : ''}
          </span>
          <span>Módulo 1</span>
        </p>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold break-words z-20">
          {last.module?.name || '...'}
        </h2>
        <button className=" text-base w-fit  px-8 py-2 md:px-10 md:py-4 rounded-3xl bg-sky-500 md:text-2xl  xl:text-3xl shadow-xl shadow-black/40 hover:bg-sky-600 hover:scale-105 hover:rounded-xl flex gap-4 justify-center items-center">
          <AiFillPlayCircle /> <span>Continuar</span>
        </button>
      </article>

      <div className="w-full h-full relative rounded-r-3xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-transparent absolute w-[65%] h-full z-10"></div>
        <img
          draggable={false}
          className="group-hover:scale-[102%] lg:rounded-l-none h-full w-[99%] ml-auto min-h-full object-cover  "
          src={src}
          alt=""
        />
      </div>
    </main>
  )
}
