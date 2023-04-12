const userDB = {
  name: '',
  email: '...@...',
  aulasAssistidas: [
    { ref: 1, time: new Date('2021-12-17T03:24:00') },
    { ref: 3, time: new Date('2021-12-18T03:23:00') },
    { ref: 5, time: new Date('2021-12-18T03:24:00') },
  ],
}

console.log(userDB.aulasAssistidas[0].time < userDB.aulasAssistidas[1].time)
const aulasCMS = [
  {
    ref: 1,
    name: 'aula 1',
  },
  {
    ref: 2,
    name: 'aula 1',
  },
  {
    ref: 3,
    name: 'aula 1',
  },
  {
    ref: 4,
    name: 'aula 1',
  },
  {
    ref: 5,
    name: 'aula 1',
  },
]

const moduloCMS = [
  {
    ref: 10,
    lessons: [{ ref: 1 }, { ref: 3 }],
  },
  {
    ref: 11,
    lessons: [{ ref: 4 }, { ref: 5 }],
  },
]

const assistidasRef = userDB.aulasAssistidas.map(v => v.ref)

const percentModules = moduloCMS.map(m => {
  const filtered = m.lessons.filter(({ ref: lRef }) =>
    assistidasRef.includes(lRef)
  )
  return {
    moduleRef: m.ref,
    percent: (filtered.length * 100) / m.lessons.length,
  }
})

console.log(percentModules)
