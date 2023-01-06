import { FaHandPeace } from 'react-icons/fa'
import useUsers from '../services/hooks/useUsers'

export default function HeaderWelcome() {
  const { data } = useUsers()

  return (
    <div id="user-info" className="p-4">
      <h3>Hello,</h3>
      <div className="relative w-max flex gap-2">
        <h1 className="text-3xl font-bold">{data?.name}</h1>
        <span className="-mt-6 text-3xl bottom-0 flex items-end">
          <FaHandPeace />
        </span>
      </div>
    </div>
  )
}
