import { useQuery } from 'react-query'
import { AttendedClasses, _User } from '../../utils/types/_User'
import { fakeApi } from '../api'

async function getUsers() {
  const data: _User = await fetch('/api/aluno/kayoroxa@gmail.com').then(r =>
    r.json()
  )

  const result: _User = {
    name: data.name,
    email: data.email,
    attendedClasses: data.attendedClasses.map((a: AttendedClasses) => ({
      ...a,
      assistedDate: new Date(a.attendedDate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    })),
    blocked: data.blocked || false,
  }

  return result
}

async function getUsersFake() {
  const { data: rawData } = await fakeApi.get('/users')

  let data = { ...rawData.users[0] }

  const result: _User = {
    name: data.name,
    email: data.email,
    attendedClasses: data.aulasAssistidas.map((a: any) => ({
      ...a,
      assistedDate: new Date(a.aulasAssistidas).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    })),
    blocked: data.blocked || false,
  }
  return result
}

export default function useUsers() {
  return useQuery('user', getUsers, {
    staleTime: 1000 * 60 * 60 * 1,
    refetchOnWindowFocus: false,
  })
}
