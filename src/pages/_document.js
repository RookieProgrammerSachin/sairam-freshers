import { Html, Head, Main, NextScript } from 'next/document'

export const metadata = {
  tite: 'Page',
  description: 'Bruh'
}

export default function Document() {
  return (
    <Html lang="en">
      <Head title='bruh'/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
