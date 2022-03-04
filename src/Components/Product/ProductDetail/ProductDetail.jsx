import { Card, Paper, Typography } from '@mui/material';
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
        <Paper elevation={3} variant='outlined' sx={{display: 'flex', justifyContent: 'space-around', margin: 'auto', width: '800px'}}>
         
        

        {
            detail ? (
                <div>
                    <div>
                        <img  width='450px'  src={detail.image} />
                    </div>
                    <div >
                        <Typography variant='h5'>Mодель:{detail.title}</Typography>
                        <Typography variant='h4'>Цена:{detail.price}</Typography>
                        <Typography variant='h6'>Класс:{detail.model}</Typography>
                        <Typography variant='subtitle1'>Тип кузова:{detail.type}</Typography>
                        <Typography variant='body1'>{detail.description}</Typography>
                        
                    </div>
                </div>
            ) : (<h1>Loading...</h1>)
        }
        </Paper>

            



    );
};

export default ProductDetail;
