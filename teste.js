const modules = [
  {
    slug: 'seu-pattern',
    name: 'Seu Pattern',
    imgUrl:
      'https://images.prismic.io/fdf-area-de-alunos/b4753ee3-e6e0-466d-91a3-fa7322a10804_2.png?auto=compress,format',
    lessons: [
      {
        id: 'https://www.w3schools.com/html/mov_bbb.mp4',
        name: 'Parte 1 - Nivel 0',
        allow: true,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
      {
        id: 'https://www.w3schools.com/html/mov_bbb.mp4',
        name: 'Parte 2 - Nivel 0',
        allow: true,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
  },
  {
    slug: '4-anos-em-1-modulo',
    name: '4 Anos Em 1 Módulo',
    imgUrl:
      'https://images.prismic.io/fdf-area-de-alunos/eee5f2d5-b532-42c1-bbe5-caebb8fe205f_1.png?auto=compress,format',
    lessons: [
      {
        id: '17nyS2ZYEd6xaUqANv4FDNawn-4OS3Dut',
        name: 'Aprenda verbo to be em 8 minutos',
        allow: true,
        videoUrl:
          'https://docs.google.com/uc?export=open&id=17nyS2ZYEd6xaUqANv4FDNawn-4OS3Dut',
      },
      {
        id: '1_apBEcdDTwhjd6tteBluxnwY5Lc9q_1Y',
        name: 'Códigos rápido',
        allow: true,
        videoUrl:
          'https://docs.google.com/uc?export=open&id=1_apBEcdDTwhjd6tteBluxnwY5Lc9q_1Y',
      },
      {
        id: '1oHFs2sghIyQ3FQcrkRiMH6iSmdilNfuD',
        name: 'Can e Shall',
        allow: true,
        videoUrl:
          'https://docs.google.com/uc?export=open&id=1oHFs2sghIyQ3FQcrkRiMH6iSmdilNfuD',
      },
    ],
  },
]

const lastID = '7nyS2ZYEd6xaUqANv4FDNawn-4OS3Dut'

const last = modules.find(v => {
  console.log(
    v.lessons.find(l => {
      console.log(l.id, lastID)
      console.log(l.id === lastID)
    })
  )
  return v.lessons.find(l => l.id === lastID)
})
