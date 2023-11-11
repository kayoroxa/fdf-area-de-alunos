import Video from '../atoms/Video'
import Playlist from '../molecules/PlayList'
import Quiz from '../molecules/Quiz'
import { useModuleStore } from '../store/useModule'

interface IProps {}

// const getClass = (selected?: boolean) => {
//   const init =
//     'flex items-center justify-center flex-1 py-4 rounded-3xl hover:cursor-pointer'
//   return selected ? init + ' bg-green-500' : init
// }

export default function PCVideoPlayPlaylist({}: IProps) {
  const { curLesson } = useModuleStore()

  // const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <div id="videosCardápio" className="flex w-full gap-12">
      <div id="left" className="flex flex-col gap-6 w-3/5">
        <Video src={curLesson.videos?.[0].url} />
        {/* <h2>Materiais:</h2> */}
        <Quiz />
      </div>

      <div id="playListWrapper" className="flex-1 flex flex-col gap-6">
        {/* <h2>[ módulo 1 ] Playlist:</h2> */}
        <Playlist />
      </div>
    </div>
  )
}
