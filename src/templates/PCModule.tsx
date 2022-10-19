import PCVideoPlayPlaylist from '../organisms/PCVideoPlayPlaylist'
import SideBar from '../organisms/SideBar'
import TopBarControls from '../organisms/TopBarControls'
import { _VideoData } from '../utils/types/_VideoData'

interface IProps {
  moduloName: string
  videosData: _VideoData[]
}

export default function PCModule({ moduloName, videosData }: IProps) {
  return (
    <section className="flex w-full h-full bg-gray-800">
      <div className="h-screen">
        <SideBar />
      </div>
      <div className="w-full flex justify-center  px-8 overflow-y-scroll max-h-screen">
        <div className="flex min-h-screen flex-col pb-9 justify-start items-center gap-12  bg-gray-800 m-auto pc">
          <div className=" rounded-3xl w-full overflow-hidden mt-6">
            <TopBarControls moduloName={moduloName} />
          </div>
          <PCVideoPlayPlaylist videosData={videosData} />
        </div>
      </div>
    </section>
  )
}
