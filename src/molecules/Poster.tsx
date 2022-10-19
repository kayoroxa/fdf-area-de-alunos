import { AiFillPlayCircle } from 'react-icons/ai'

/* eslint-disable @next/next/no-img-element */
export default function Poster({ src }: { src: string }) {
  return (
    <main className="progress py-6 h-[350px] md:h-[450px] lg:h-[500px]  w-full max-w-[1300px] mx-auto relative">
      <article className="absolute bottom-14 md:bottom-20 left-4 xl:left-20 lg:left-10 flex flex-col gap-6 max-w-xs xl:max-w-md z-40">
        <p className="xl:text-xl  flex gap-5 items-center">
          <span className="border border-sky-500 px-5 py-2 rounded-lg font-light">
            Aula 3
          </span>
          <span>Módulo 1</span>
        </p>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold break-words">
          4 anos de inglês em 1 módulo
        </h2>
        <button className=" text-base w-fit  px-8 py-2 md:px-10 md:py-4 rounded-3xl bg-sky-500 md:text-2xl  xl:text-3xl shadow-xl shadow-black/40 hover:bg-sky-600 hover:scale-105 hover:rounded-xl flex gap-4 justify-center items-center">
          <AiFillPlayCircle /> <span>Continuar</span>
        </button>
      </article>

      <div className="w-full h-full  relative">
        <div className="bg-gradient-to-r from-gray-800 to-transparent absolute w-full h-full"></div>
        <img
          draggable={false}
          className="rounded-3xl lg:rounded-l-none h-full w-[99%] ml-auto min-h-full object-cover  "
          src={src}
          alt=""
        />
      </div>
    </main>
  )
}
