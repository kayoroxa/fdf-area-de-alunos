import PCVideoPlayPlaylist from '../organisms/PCVideoPlayPlaylist'
import TopBarControls from '../organisms/TopBarControls'
import { _VideoData } from '../utils/types/_VideoData'

interface IProps {
  moduloName: string
  videosData: _VideoData[]
}

export default function PCModule({ moduloName, videosData }: IProps) {
  return (
    <div className="w-full flex justify-center bg-gray-900 px-8">
      <div className="flex min-h-screen flex-col pb-9 justify-start items-center gap-12  bg-gray-900 m-auto pc">
        <div className=" rounded-3xl w-full overflow-hidden mt-6">
          <TopBarControls moduloName={moduloName} />
        </div>
        <PCVideoPlayPlaylist videosData={videosData} />
      </div>
    </div>
  )
}
