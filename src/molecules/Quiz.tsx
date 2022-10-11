const optionClass = 'px-4 py-2 text-center bg-slate-500 rounded-3xl flex gap-6'
export default function Quiz() {
  return (
    <div className="flex flex-col gap-4 bg-slate-700 w-full text-center px-7 py-9 rounded-2xl">
      <h1>Question:</h1>
      <div className="options flex flex-col gap-3 w-full m-auto">
        <p className={optionClass}>
          <span className="bg-slate-400 px-3 rounded-full">a</span>
          <span className="flex-1">Cadeira</span>
        </p>
        <p className={optionClass}>
          <span className="bg-slate-400 px-3 rounded-full">b</span>
          <span className="flex-1">Cadeira</span>
        </p>
        <p className={optionClass}>
          <span className="bg-slate-400 px-3 rounded-full">c</span>
          <span className="flex-1">Cadeira</span>
        </p>
        <p className={optionClass}>
          <span className="bg-slate-400 px-3 rounded-full">d</span>
          <span className="flex-1">Cadeira</span>
        </p>
      </div>
    </div>
  )
}
