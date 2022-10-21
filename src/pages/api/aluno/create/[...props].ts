import { query as q } from 'faunadb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { fauna } from '../../../../services/faunadb'
//  import { createAluno } from '../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { props } = req.query

  if (!props?.[1].includes('@')) {
    return res
      .status(404)
      .json({ error: "you don't put the right data.. /name/email" })
  } else {
    const [name, email] = props as string[]
    try {
      const result = await fauna.query(
        q.If(
          q.Not(q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email)))),
          q.Create(q.Collection('users'), {
            data: { email: email.toLocaleLowerCase(), name },
          }),
          q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email)))
        )
      )

      res.status(200).json(result)
    } catch (error) {
      res.status(404).end('Error..')
    }
  }
}
