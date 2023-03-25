/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar/Navbar'

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Art Gallery</title>

          <link lazyload rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            lazyload
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin
          />
          <link
            lazyload
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/Fa-icon.png" />
        </Head>
        <body>
          
          <Main />
          <NextScript />
          {/* Below we add the modal wrapper */}
          <div id="modal"></div>
        </body>
      </Html>
    )
  }
}

export default MainDocument
