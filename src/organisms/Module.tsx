/* eslint-disable @next/next/no-img-element */
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GiPadlock } from 'react-icons/gi'
import { GoPlay } from 'react-icons/go'
import MyLink from '../utils/MyLink'

interface IModule {
  name: string
  imgUrl: string
  link?: string | false
  status: 'watching' | 'blocked' | 'done'
  newsLessons?: boolean
}

export default function CardModule({
  name,
  imgUrl,
  link,
  status,
  newsLessons,
}: IModule) {
  return (
    <MyLink href={link} passHref>
      <div
        className={`flex flex-col card overflow-hidden rounded-3xl w-[286px]  border-b-8 border-gray-700 shadow-bottom select-none ${
          status === 'blocked'
            ? 'opacity-40 hover:cursor-not-allowed'
            : 'opacity-100 hover:cursor-pointer hover:scale-105'
        }`}
      >
        <div className="h-[286px]">
          <img
            draggable={false}
            src={imgUrl}
            alt=""
            className="w-full min-w-full h-full min-h-full object-cover"
          />
        </div>
        <div className="flex g-4 flex-col bg-gray-600 px-4 py-5 text-lg justify-between gap-2 relative ">
          {status === 'done' && (
            <BsFillCheckCircleFill className="absolute left-8 -top-3 scale-[3] drop-shadow-icon fill-green-300" />
          )}

          {status === 'watching' && (
            <GoPlay className="absolute left-8 -top-3 scale-[3] drop-shadow-icon" />
          )}
          {status === 'blocked' && (
            <GiPadlock className="absolute left-8 -top-3 scale-[3] drop-shadow-icon" />
          )}

          <h2 className="text-2xl mt-3">{name}</h2>

          <ul className="flex flex-grow gap-2 flex-wrap">
            {status === 'blocked' && (
              <div
                id="lessonCount"
                className="flex gap-2 text-sm px-3 py-1 bg-gray-500 w-fit h-fit rounded-xl"
              >
                <span>⏱</span>
                <span>Em breve</span>
              </div>
            )}
            {status !== 'blocked' && (
              <div
                id="lessonCount"
                className="flex gap-2 text-sm px-3 py-1 bg-gray-500 w-fit h-fit rounded-xl"
              >
                <span>📼</span>
                <span>21 Aulas</span>
              </div>
            )}
            {newsLessons && (
              <div
                id="lessonCount"
                className="flex gap-2 text-sm px-3 py-1 w-fit rounded-xl bg-orange-600"
              >
                <span>Aulas novas</span>
              </div>
            )}
          </ul>
        </div>
      </div>
    </MyLink>
  )
}
