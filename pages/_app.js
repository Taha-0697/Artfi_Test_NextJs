import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.scss'
import Section from './../components/Section/Section'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Section>
          <Component {...pageProps} />
      </Section>
    </>
  )
}

export default MyApp
