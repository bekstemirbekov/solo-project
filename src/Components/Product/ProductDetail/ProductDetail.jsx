import { Card, Grid, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { productContext } from '../../../Contexts/ProductContext';


const ProductDetail = () => {
    const {id} = useParams()
    const { detail, getDetail} = useContext(productContext)

    useEffect(() => {
        getDetail(id)
    }, [id])
    return (
        <Paper elevation={3} variant='outlined' sx={{display: 'flex', justifyContent: 'space-around', margin: 'auto'}}>
         
        

        {
            detail ? (
                <Grid  key={id}  xs={12} sm={6} md={3}>
                      <div>
                    <div>
                        <img  width='350px'  src={detail.image} />
                    </div>
                    <div >
                        <Typography variant='h5'>Name:{detail.title}</Typography>
                        <Typography variant='h4'>Price:{detail.price} $</Typography>
                        <Typography variant='subtitle1'>Type of product:{detail.type}</Typography>
                        <Typography variant='body1'>Detailed description:{detail.description}</Typography>
                        
                    </div>
                </div>
                </Grid>
               
            ) : (<h1>Loading...</h1>)
        }
        </Paper>

            



    );
};

export default ProductDetail;
