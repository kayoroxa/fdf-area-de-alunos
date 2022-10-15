import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'

interface IProps {
  moduloName: string
}

export default function TopBarControls({ moduloName }: IProps) {
  return (
    <Link href="/" passHref>
      <div
        id="controlBar"
        className="flex justify-between items-center w-full h-20 bg-gray-800 px-5 py-3 text-3xl"
      >
        <div
          id="back"
          className=" hover:cursor-pointer hover:scale-110 transition-all"
        >
          <AiFillHome />
        </div>
        <div id="title" className=" text-xl font-semibold">
          Formula Da Fluência
          {/* {moduloName} */}
        </div>
        <div id="like">❤</div>
      </div>
    </Link>
  )
}
