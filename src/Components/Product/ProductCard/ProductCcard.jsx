import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { productContext } from '../../../Contexts/ProductContext';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductCard({item}) {
    const {deleteProduct, addToCart, chekProductInCart, useAuth, addToStar, chekProductInStar} = React.useContext(productContext)
      const currentUser = useAuth()
// element for delete
    let icons = (
        <CardActions disableSpacing>
            
              {currentUser?.email === 'admin@gmail.com' ? (
                   <Link to={`edit/${item.id}`}>
                   <IconButton>
                       <EditIcon/>
                   </IconButton>
               </Link>
              ): null

              }
           
            {currentUser?.email === 'admin@gmail.com' ? (
              <IconButton onClick={() => deleteProduct(item.id)}>
                <DeleteIcon/>
              </IconButton>
              ): null
              
            }
            
               <IconButton onClick={() => {
                addToCart(item) 
                }        
            }
            color = {chekProductInCart(item.id) ? 'secondary': 'inherit'}
             >
                       <ShoppingCart />
            </IconButton>
               <IconButton onClick={() => {
                addToStar(item) 
                }        
            }
            color = {chekProductInStar(item.id) ? 'secondary': 'inherit'}
             >
                       <FavoriteIcon/>
            </IconButton>
           
            <Link to={`/detail/${item.id}`} >
            <IconButton>
             <MoreHorizIcon/>
           </IconButton>
            </Link>
           
           
            
        </CardActions>
    )

  return (
    

        <Card sx={{  width: '100%' }} >
      <CardMedia
        component="img"
        width='100%'
        height="300"
        image={item.image}
        alt={item.title}
      />
  
      <CardContent>
        <Typography gutterBottom variant="h5" >
          {item.title}
        </Typography>
      </CardContent>
     
    

      <CardContent>
          <Typography variant='body1'>
              Cтоимость:{item.price}
          </Typography>
          <Typography variant='body2'>
              Класс: {item.model}
          </Typography>
          <Typography variant='body2'>
              Тип: {item.type}
          </Typography>
     
      </CardContent>
    
        {icons}
        </Card>

 
     
      
   
  );
}
