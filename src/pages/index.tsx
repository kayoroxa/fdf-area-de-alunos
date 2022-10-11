import * as prismic from '@prismicio/client'
import sm from '../../sm.json'

export async function getServerSideProps() {
  const client = prismic.createClient(sm.apiEndpoint)
  const response = await client.getByUID('module', 'modulo1')

  console.log(response)
  return {
    props: {
      response,
    },
  }
}

const Home = ({ response }: any) => {
  return (
    <div className="bg-red-500">
      Index page:
      {JSON.stringify(response, null, 4)}
    </div>
  )
}

export default Home
