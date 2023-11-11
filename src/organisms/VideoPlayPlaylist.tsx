import { useState } from 'react'
import Video from '../atoms/Video'
import OptionToggle from '../molecules/OptionToggle'
import Playlist from '../molecules/PlayList'
import Quiz from '../molecules/Quiz'
import { useModuleStore } from '../store/useModule'
import { LessonWithVideos } from '../utils/types/_Module'

interface IProps {
  videosData: LessonWithVideos[]
}

const getClass = (selected?: boolean) => {
  const init =
    'flex items-center justify-center flex-1 py-4 rounded-3xl hover:cursor-pointer'
  return selected ? init + ' bg-green-500' : init
}

export default function VideoPlayPlaylist({}: IProps) {
  const { curLesson } = useModuleStore()
  const [optionActive, setOptionActive] = useState<'playlist' | 'material'>(
    'playlist'
  )

  return (
    <div
      id="videosCardápio"
      className="flex flex-col  w-11/12 gap-12 items-center "
    >
      <Video src={curLesson.videos?.[0].url} />

      <OptionToggle
        onOptionSelect={option => setOptionActive(option)}
        optionActive={optionActive}
      />

      {optionActive === 'playlist' && <Playlist />}

      {optionActive === 'material' && <Quiz />}
      {optionActive === 'material' && <Quiz />}
      {optionActive === 'material' && <Quiz />}
      {optionActive === 'material' && <Quiz />}
    </div>
  )
}
