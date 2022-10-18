import Link from 'next/link'

export default function MyLink({ href, children }: any) {
  if (!href) return <>{children}</>
  return (
    <Link href={href} passHref>
      {children}
    </Link>
  )
}
