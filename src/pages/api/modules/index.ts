import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '../../../../prismicio'
import { _Module } from '../../../utils/types/_Module'

function getDirectLinkUrl(link: string) {
  if (link.includes('http')) return link
  return 'https://docs.google.com/uc?export=open&id=' + link
  // return link.match(/[\w\d]{20,}/g)?.[0]
}

function getIdByDirectLink(link: string) {
  return link.replace('https://docs.google.com/uc?export=open&id=', '')
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const client = createClient({})
      const response = await client.getByType('module')

      const modules: _Module[] = response.results.map(({ data, slugs }) => {
        return {
          slug: slugs[0],
          name: data.title,
          imgUrl: data.thumbnail.url,
          allow: data.allow ?? true,
          lessons:
            data.allow === false
              ? []
              : data.slices.map(({ primary: lesson }: any) => ({
                  id: getIdByDirectLink(lesson.video_url.url),
                  name: lesson.title,
                  allow: lesson.allow || true,
                  videoUrl: getDirectLinkUrl(lesson.video_url.url),
                })),
        }
      })

      res.status(200).json(modules)
    } catch (error) {
      res.status(404).end('Not Found')
    }
  } else {
    res.status(404).end('Only Get')
  }
}
