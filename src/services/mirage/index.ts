import { createServer, Factory, Model } from 'miragejs'

type User = {
  name: string
  email: string
  aulasAssistidas: { id: string; assistedDate: EpochTimeStamp }[]
}
type Module = {
  id: string
  name: string

  lessons: {
    id: string
    name: string
    allow: boolean
    videoUrl: string
    tempUrl: string
  }[]
}

//Partial means that you don't need parse all user atributes

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
      module: Model.extend<Partial<Module>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return `Caio Acahú`
        },
        email() {
          return `kayoroxa@gmail.com`
        },
        aulasAssistidas() {
          return [
            { id: `1_a`, assistedDate: new Date('2021-12-17T03:24:00') },
            { id: `1_b`, assistedDate: new Date('2021-12-18T03:23:00') },
            { id: `2_a`, assistedDate: new Date('2021-12-18T03:24:00') },
            { id: `2_b`, assistedDate: new Date('2021-12-18T04:23:00') },
          ]
        },
      }),
      module: Factory.extend({
        id(i) {
          return `course_${i + 1}`
        },
        name(i) {
          return `modulo_name_${i + 1}`
        },
        lessons(i) {
          return [
            {
              id: `${i + 1}_a`,
              name: '',
              allow: true,
              videoUrl: 'https://video_1_a.mp4',
            },
            {
              id: `${i + 1}_b`,
              name: '',
              allow: true,
              videoUrl: 'https://video_1_b.mp4',
            },
            {
              id: `${i + 1}_c`,
              name: '',
              allow: false,
              videoUrl: 'https://video_1_c.mp4',
            },
          ]
        },
      }),
    },

    seeds(server) {
      server.createList('user', 1)
      server.createList('module', 4)
    },

    routes() {
      this.namespace = 'fake-api'
      this.timing = 750

      this.get('/users')
      this.post('/users')

      this.get('/modules')
      this.post('/modules')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
