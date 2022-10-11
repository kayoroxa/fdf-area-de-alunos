import TopBarControls from '../organisms/TopBarControls'
import VideoPlayPlaylist from '../organisms/VideoPlayPlaylist'
import { _VideoData } from '../utils/types/_VideoData'

interface IProps {
  moduloName: string
  videosData: _VideoData[]
}

export default function MobileModule({ moduloName, videosData }: IProps) {
  return (
    <div className="flex min-h-screen flex-col pb-9 justify-start items-center gap-12 max-w-screen-sm bg-gray-900 m-auto">
      <TopBarControls moduloName={moduloName} />
      <VideoPlayPlaylist videosData={videosData} />
    </div>
  )
}
