import TopBarControls from '../organisms/TopBarControls'
import VideoPlayPlaylist from '../organisms/VideoPlayPlaylist'
import { LessonWithVideos } from '../utils/types/_Module'

interface IProps {
  moduloName: string
  videosData: LessonWithVideos[]
}

export default function MobileModule({ moduloName, videosData }: IProps) {
  return (
    <div className="bg-gray-800 w-full">
      <div className="flex min-h-screen m-auto pb-9 max-w-screen-sm  flex-col justify-start items-center gap-12  ">
        <div id="wrapper-top-bar" className="w-full rounded-xl overflow-hidden">
          <TopBarControls moduloName={moduloName} />
        </div>
        <VideoPlayPlaylist videosData={videosData} />
      </div>
    </div>
  )
}
