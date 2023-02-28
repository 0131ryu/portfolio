import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" 
      rel="stylesheet" />
      <body className='bg-fixed bg-gradient-to-r from-dark-blue to-gray-blue dark:from-black-300 dark:to-black-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
