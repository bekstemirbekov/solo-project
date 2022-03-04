import { Box, Grid, Pagination, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductContext';

import ProductCard from '../ProductCard/ProductCcard';


const ProductList = () => {
    const {products, getProducts, paginatedPages} = useContext(productContext)
    const search = new URLSearchParams(window.location.search)
    const [searchParams, setSearchParams] = useSearchParams()
    const [limit, setLimit] = useState(4)
    const [page, setPage] = useState(searchParams.get('_page') ? searchParams.get('_page') : 1)
    const navigate = useNavigate()

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() =>  {
        setSearchParams({
            '_limit': limit,
            '_page': page
        })
    }, [limit, page])

    const handlePage = (e, pageVal) => {
        let newPath =`${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setSearchParams({'_page': pageVal, '_limit': limit})
        setLimit(4)
        getProducts()
        setPage(pageVal)
    }

    return (
        <Box sx={{flexGrow: 1, margin: 4}}>
            <Grid container spacing={3} justifyContent="center">
                {
                    products ? (
                        products.map((item, index) => (
                            <Grid key={index} item xs={12} sm={6}  md={3}>
                                <ProductCard item={item} />
                            </Grid>
                        ))
                    ) : (<h1>Loading...</h1>)
                }
            </Grid>
            <Stack spacing={2}>
                    <Pagination
                        count={paginatedPages}
                        onChange={handlePage}
                        page={+page}
                    />
                </Stack>
        </Box>
    );
};

export default ProductList;