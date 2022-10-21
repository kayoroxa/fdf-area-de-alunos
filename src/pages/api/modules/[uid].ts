import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '../../../../prismicio'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uid } = req.query as { [key: string]: string }

  try {
    const client = createClient({})
    const response = await client.getByUID('module', uid)

    let data: any = []

    for (let rawData of response.data.slices) {
      const { primary } = rawData

      data.push({
        name: primary.title,
        allow: true,
        videoUrl: primary.video_url.url,
      })
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(404).end('Not Found')
  }
}
