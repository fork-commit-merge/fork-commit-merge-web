import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class DocumentExtension extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='icon'
            type='image/png'
            href='/fork-commit-merge-logo-favicon.png'
          />
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9765110233243602'
            crossOrigin='anonymous'
          ></script>
          {/* Preload critical background images */}
          <link
            rel='preload'
            href='/fcm-background-image.png'
            as='image'
            type='image/png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}




