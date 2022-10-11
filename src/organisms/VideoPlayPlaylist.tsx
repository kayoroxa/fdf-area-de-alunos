import { useEffect, useRef, useState } from 'react'
import OptionToggle from '../molecules/OptionToggle'
import Playlist from '../molecules/PlayList'
import { _VideoData } from '../utils/types/_VideoData'

interface IProps {
  videosData: _VideoData[]
}

const getClass = (selected?: boolean) => {
  const init =
    'flex items-center justify-center flex-1 py-4 rounded-3xl hover:cursor-pointer'
  return selected ? init + ' bg-green-500' : init
}

export default function VideoPlayPlaylist({ videosData }: IProps) {
  const [curVideo, setCurVideo] = useState(videosData[0])
  const [optionActive, setOptionActive] = useState<'playlist' | 'material'>(
    'playlist'
  )

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = curVideo.videoUrl
    }
  }, [curVideo])

  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <div
      id="videosCardápio"
      className="flex flex-col  w-11/12 gap-12 items-center "
    >
      <div id="videoWrapper">
        <video ref={videoRef} className="w-full" controls autoPlay>
          <source src={curVideo.videoUrl} type="video/mp4" />
        </video>
      </div>

      <OptionToggle
        onOptionSelect={option => setOptionActive(option)}
        optionActive={optionActive}
      />

      {optionActive === 'playlist' && (
        <Playlist
          videosData={videosData}
          onVideoSelect={vidSelected => setCurVideo(vidSelected)}
          curVideo={curVideo}
        />
      )}
    </div>
  )
}
