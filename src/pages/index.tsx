import type { GetServerSideProps } from 'next'
import { Aluno } from '../../lib/db'
import styles from '../styles/Home.module.css'

export const getServerSideProps: GetServerSideProps = async () => {
  const alunos = { carlin: 'oi' }

  return {
    props: {
      alunos,
    },
  }
}

interface PostProps {
  alunos: Aluno[]
}

const Home = ({ alunos }: PostProps) => {
  console.log(alunos)
  return (
    <div className={styles.container}>
      Index page:
      {JSON.stringify(alunos, null, 4)}
    </div>
  )
}

export default Home
