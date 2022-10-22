import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Link from 'next/link'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { repositoryName } from '../../prismicio'
import { makeServer } from '../services/mirage'
import '../styles/globals.css'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const newQueryClient = new QueryClient()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <QueryClientProvider client={newQueryClient}>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}
