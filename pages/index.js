import Contact from './contact/index'
import About from './about/index'

export default function Home() {
  return (
    <>
      <div id="home">
        <h1>Home</h1>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}
