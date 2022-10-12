import TopBarControls from '../organisms/TopBarControls'
import VideoPlayPlaylist from '../organisms/VideoPlayPlaylist'
import { _VideoData } from '../utils/types/_VideoData'

interface IProps {
  moduloName: string
  videosData: _VideoData[]
}

export default function MobileModule({ moduloName, videosData }: IProps) {
  return (
    <div className="flex min-h-screen m-auto pb-9 max-w-screen-sm  flex-col justify-start items-center gap-12  bg-gray-900 ">
      <TopBarControls moduloName={moduloName} />
      <VideoPlayPlaylist videosData={videosData} />
    </div>
  )
}
