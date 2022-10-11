import { prisma } from './prisma'

export interface Aluno {
  id: number
  name: string
}

export async function getAllAlunos() {
  const data = {}
  return data
}

export async function createAluno(name: string) {
  await prisma.aluno.create({
    data: {
      name,
    },
  })
}
