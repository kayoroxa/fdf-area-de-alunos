import { query as q } from 'faunadb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { fauna } from '../../../services/faunadb'
import { _User } from '../../../utils/types/_User'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method === 'POST') {
  //   const data = JSON.parse(req.body)
  //   await createAluno(data)
  //   return res.status(200).json({ message: 'Success' })
  // }
  const { email } = req.query
  try {
    const { data }: { data: _User } = await fauna.query(
      q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email)))
    )

    res.status(200).json(data)

    console.log()
  } catch (error) {
    res.status(404).end(JSON.stringify(error))
  }

  // res.status(200).json({
  //   name: 'Caio Fernandes',
  //   lastLesson: {
  //     moduleSlug: '4-anos-em-1-modulo',
  //     lessonID: '1',

  //     moduleName: '4 anos em 1 módulo',

  //     lessonIndex: 1,
  //   },
  // })
}
