import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import Link from 'next/link'
import { repositoryName } from '../../prismicio'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
