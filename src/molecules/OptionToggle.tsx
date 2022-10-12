interface IProps {
  onOptionSelect: (option: 'playlist' | 'material') => void
  optionActive: 'playlist' | 'material'
}

const getClass = (selected?: boolean) => {
  const init =
    'flex items-center justify-center flex-1 py-4 rounded-3xl hover:cursor-pointer'
  return selected ? init + ' bg-blue-500' : init
}

export default function OptionToggle({ optionActive, onOptionSelect }: IProps) {
  return (
    <div
      id="option"
      className="flex justify-between bg-gray-700 rounded-3xl w-5/6"
    >
      <div
        onClick={() => onOptionSelect('playlist')}
        className={getClass(optionActive === 'playlist')}
      >
        <span>Playlist</span>
      </div>
      <div
        onClick={() => onOptionSelect('material')}
        className={getClass(optionActive === 'material')}
      >
        <span>Material</span>
      </div>
    </div>
  )
}
