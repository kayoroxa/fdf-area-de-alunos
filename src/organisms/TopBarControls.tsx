interface IProps {
  moduloName: string
}

export default function TopBarControls({ moduloName }: IProps) {
  return (
    <div
      id="controlBar"
      className="flex justify-between items-center w-full h-20 bg-gray-800 px-5 py-3 text-3xl"
    >
      <div id="back">⬅</div>
      <div id="title" className=" text-xl font-semibold">
        {moduloName}
      </div>
      <div id="like">❤</div>
    </div>
  )
}
