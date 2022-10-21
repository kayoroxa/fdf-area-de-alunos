import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json([
      {
        slug: 'seu-pattern',
        name: 'Seu Pattern',
        imgUrl:
          'https://images.prismic.io/fdf-area-de-alunos/b4753ee3-e6e0-466d-91a3-fa7322a10804_2.png?auto=compress,format',
        allow: true,
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
        allow: true,
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
    ])
  } catch (error) {
    res.status(404).end('Not Found')
  }
}
