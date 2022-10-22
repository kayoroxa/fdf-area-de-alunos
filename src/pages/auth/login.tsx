import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const [emailInput, setEmailInput] = useState('')
  const router = useRouter()
  const { data: session, status } = useSession()

  function onSubmit(e: any) {
    e.preventDefault()
    signIn('credentials', {
      email: emailInput.toLowerCase(),
    })
  }

  if (status === 'authenticated') {
    router.push('/')
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-6xl py-4">Login:</h1>
      <form action="" onSubmit={onSubmit} className="flex flex-col gap-4">
        <label htmlFor="email" className="text-3xl">
          Coloque seu email:
        </label>

        <input
          autoFocus={true}
          type="email"
          name=""
          id="email"
          required={true}
          className="bg-transparent border border-y-gray-300 p-4 rounded-lg text-xl"
          onChange={event => setEmailInput(event.target.value)}
        />

        <input
          type="submit"
          value="Entrar"
          className="bg-sky-500 py-4 px-8 rounded-3xl hover:cursor-pointer hover:bg-sky-500/80"
        />
      </form>
    </main>
  )
}
