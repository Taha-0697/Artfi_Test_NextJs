import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Link from "next/link";
import { DateFormatted } from './../../utils/utilities';


const card = ({name = 'Monalisa', map = "https://www.google.com/maps/d/embed?mid=1hj5Zap7TybtqNpi0ewONV9FEIJE&ehbc=2E312F"  , location='Monalisa painting is kept in Lovure museum, Paris' , date ='September 14, 2016', image= 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Isleworthml.JPG/229px-Isleworthml.JPG' }) => {
const [liked, setliked] = useState(false)  
return (
    <Card
       
 sx={{width:345}} className='shadow-2xl' >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Name">
            {name.charAt(0)}
          </Avatar>
        }
      
        title={name}
        subheader={DateFormatted(date)}
      />
      <CardMedia
        component="img"
    sx={{ padding: "1em 1em 0 1em", objectFit: "fill" }}
        height="194"
        image={image}
        alt={name}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
     <Link href={map} passHref>
  <a target="_blank" rel="noopener noreferrer">
    {location}
  </a>
</Link>
        </Typography>
      </CardContent>
      <CardActions className='flex justify-center'>
        <IconButton aria-label="add to favorites">
         <Typography
onClick={()=>{setliked(!liked)}}
 className='flex items-center gap-1 ' variant="body2" color="text.primary" >
      {liked ? <FavoriteIcon style={{color:'red'}} /> : <FavoriteBorderIcon />}
      <span>{liked ? 'Added to Wishlist' : 'Add to Wishlist'}</span>
        </Typography>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default card
