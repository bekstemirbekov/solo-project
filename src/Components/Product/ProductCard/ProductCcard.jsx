import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { productContext } from '../../../Contexts/ProductContext';


export default function ProductCard({item}) {
    const {deleteProduct, addToCart, chekProductInCart, useAuth, addToStar, chekProductInStar} = React.useContext(productContext)
      const currentUser = useAuth()
// element for delete
    let icons = (
        <CardActions disableSpacing>
            
              {currentUser?.email === 'admin@gmail.com' ? (
                   <Link to={`edit/${item.id}`}>
                   <IconButton style={{color: '#29d9d5'}}>
                       <EditIcon/>
                   </IconButton>
               </Link>
              ): null

              }
           
            {currentUser?.email === 'admin@gmail.com' ? (
              <IconButton style={{color: '#29d9d5'}} onClick={() => deleteProduct(item.id)}>
                <DeleteIcon/>
              </IconButton>
              ): null
              
            }
            
               <IconButton style={{color: '#29d9d5'}} onClick={() => {
                addToCart(item) 
                }        
            }
            color = {chekProductInCart(item.id) ? 'secondary': 'inherit'}
             >
                       <AddShoppingCartIcon/>
            </IconButton>
               <IconButton style={{color: '#29d9d5'}} onClick={() => {
                addToStar(item) 
                }        
            }
            color = {chekProductInStar(item.id) ? 'secondary': 'inherit'}
             >
                       <BookmarkIcon/>
            </IconButton>
           
            <Link to={`/detail/${item.id}`} >
            <IconButton style={{color: '#29d9d5'}}>
             <MoreHorizIcon/>
           </IconButton>
            </Link>
           
           
            
        </CardActions>
    )

  return (
    

        <Card sx={{  width: '100%',  background: '#222222' }} >
      <CardMedia
        component="img"
        width='100%'
        height="300"
        image={item.image}
        alt={item.title}
      />
  
      <CardContent>
        <Typography style={{
          color: 'white'
        }} gutterBottom variant="h5" >
          {item.title}
        </Typography>
      </CardContent>
     
    

      <CardContent>
          <Typography style={{
          color: 'white'
        }} variant='body1'>
              Price:{item.price} $
          </Typography>
          <Typography style={{
          color: 'white'
        }} variant='body2'>
          </Typography>
          <Typography style={{
          color: 'white'
        }} variant='body2'>
              Type of Product: {item.type}
          </Typography>
     
      </CardContent>
    
        {icons}
        </Card>

 
     
      
   
  );
}
