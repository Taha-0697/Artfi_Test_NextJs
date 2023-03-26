
import Contact from './contact/index'
import About from './about/index'
import Card from '../components/Card/Card'
import NavLink from '../components/Navlinks/Navlinks'

import Button from './../components/Button/Button'
import IconButton from '@mui/material/IconButton'
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function Home() {
  return (
    <>
      <div id="home" className="flex flex-col flex-wrap gap-16 justify-center items-center pt-20 py-5  w-screen	">
        <div className="flex flex-wrap gap-10 justify-center items-center ">
          <Card  name='Art Directory' image='https://images.adsttc.com/media/images/60a1/2bf9/f043/cc2d/9818/162b/newsletter/screen-shot-2021-05-16-at-7-pm.jpg?1621175299' location='Art Museum somewhere on earth' map='https://www.google.com/maps/place/Jauhar+Chowrangi+Road,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.9156928,67.1203799,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb338e43e0bcbdd:0x8c181e423c8d875e!8m2!3d24.915688!4d67.1225686!16s%2Fg%2F1thnm7sz' date='03/26/2023'/>
          <Card />
          <Card  name='Art Directory' image='https://images.adsttc.com/media/images/60a1/2bf9/f043/cc2d/9818/162b/newsletter/screen-shot-2021-05-16-at-7-pm.jpg?1621175299' location='Art Museum somewhere on earth' map='https://www.google.com/maps/place/Jauhar+Chowrangi+Road,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.9156928,67.1203799,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb338e43e0bcbdd:0x8c181e423c8d875e!8m2!3d24.915688!4d67.1225686!16s%2Fg%2F1thnm7sz' date='03/26/2023'/>
        </div>
            <NavLink href="/gallery">

        <Button>
 <IconButton aria-label="more"  style={{ color: 'white'}}>
 For More      <SkipNextIcon style={{ color: 'white'}}/>
          </IconButton>
        </Button>
</NavLink>
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
