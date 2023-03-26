import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.scss'
import Section from './../components/Section/Section'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <Section> */}
      <Component {...pageProps} />
      {/* </Section> */}
      <Footer />
    </>
  )
}

export default MyApp
