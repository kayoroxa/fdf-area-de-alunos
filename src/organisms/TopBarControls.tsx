import { useRouter } from 'next/router'
import { AiFillHome } from 'react-icons/ai'

interface IProps {
  moduloName: string
}

export default function TopBarControls({ moduloName }: IProps) {
  const router = useRouter()

  return (
    <div
      id="controlBar"
      className="flex justify-between items-center w-full h-20 bg-gray-800 px-5 py-3 text-3xl"
    >
      <div
        id="back"
        className=" hover:cursor-pointer hover:scale-110 transition-all"
        onClick={() => router.push('/')}
      >
        <AiFillHome />
      </div>
      <div id="title" className=" text-xl font-semibold">
        {moduloName}
      </div>
      <div id="like">❤</div>
    </div>
  )
}
