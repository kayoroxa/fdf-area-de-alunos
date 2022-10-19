import { ReactNode } from 'react'
import { AiFillHome, AiFillPlayCircle } from 'react-icons/ai'
import { MdVideoLibrary } from 'react-icons/md'
import { SiSpeedtest } from 'react-icons/si'
import HeaderWelcome from '../molecules/HeadWelcome'

function ButtonHeader({
  children,
  active,
  notAble,
}: {
  children: ReactNode
  active?: boolean
  notAble?: boolean
}) {
  return (
    <button
      className={`${
        active
          ? 'bg-gray-800 hover:cursor-default'
          : 'bg-gray-800/20 hover:bg-gray-800/30 hover:cursor-pointer'
      } ${
        notAble ? 'text-white text-opacity-30 hover:cursor-help' : ''
      } px-10 py-4 text-xl  rounded-l-3xl flex gap-5 items-center`}
    >
      {children}
    </button>
  )
}

export default function SideBar() {
  return (
    <section className="bg-gray-700/90 rounded-r-[40px] py-8 max-w-sm flex flex-col gap-12 items-center h-full">
      {/* <div id="ico" className="w-48 text-center ">
    <img
      src="https://images.prismic.io/fdf-area-de-alunos/a0265d46-0668-4d7c-91a0-e41419fede96_ingl%C3%AAsflix+transparente+copy.png?auto=compress,format"
      alt=""
    />
    <p className="-mt-2  bg-white/90 text-black font-bold">
      Formula da fluência
    </p>
  </div> */}
      <HeaderWelcome />
      <main className="self-end flex flex-col gap-6 ml-12">
        <ButtonHeader active>
          <AiFillHome className="fill-sky-400" />{' '}
          <span className="text-sky-400">Inicio</span>
        </ButtonHeader>

        <ButtonHeader>
          <AiFillPlayCircle /> <span>Continuar...</span>
        </ButtonHeader>

        <ButtonHeader notAble>
          <SiSpeedtest /> <span>Testar sua fluência</span>
        </ButtonHeader>

        <ButtonHeader notAble>
          <MdVideoLibrary /> <span>Conteúdo livre</span>
        </ButtonHeader>
      </main>

      <footer className="mt-auto">
        <p className="bg-white/40 text-black/60 font-bold px-3 rounded-lg">
          Formula da fluência
        </p>
      </footer>
    </section>
  )
}
