import { _VideoData } from '../utils/types/_VideoData'

interface IProps {
  videosData: _VideoData[]
  onVideoSelect: (videoData: _VideoData) => void
  curVideo: _VideoData
}

export default function Playlist({
  videosData,
  onVideoSelect,
  curVideo,
}: IProps) {
  return (
    <div id="playlist" className="flex flex-col gap-7 w-full">
      {videosData.map((videoData, i) => (
        <div
          key={i}
          id="tirinha-do-vid"
          className={`flex gap-3  bg-gray-800 px-4 py-3 radius items-center  hover:bg-gray-700 ${
            videoData.allow
              ? 'hover:cursor-pointer'
              : 'hover:cursor-not-allowed'
          } ${
            curVideo.name === videoData.name ? ' opacity-100' : ' opacity-60'
          }`}
          onClick={() => videoData.allow && onVideoSelect(videoData)}
        >
          <div id="play">▶</div>
          <div className="flex flex-col flex-1">
            <p className=" text-lg">{videoData.name}</p>
            <p className=" text-xs">06:25 / 15:05</p>
          </div>
          <div id="cadeado">{videoData.allow ? '' : '🔐'}</div>
        </div>
      ))}
    </div>
  )
}
