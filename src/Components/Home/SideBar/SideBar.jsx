import React, { useContext, useState } from 'react';
import { styled} from '@mui/material/styles'
import { useNavigate } from 'react-router';

import { Box, FormControl, FormLabel, Grid, Paper, RadioGroup, Slider, Radio, FormControlLabel } from '@mui/material';
import { Button, InputGroup} from 'react-bootstrap'
import { productContext } from '../../../Contexts/ProductContext';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Sidebar = () => {
    const search = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const { getProducts} = useContext(productContext)
    const [type, setType] = useState(search.get('type') || '')
    const [price, setPrice] = useState(search.get('price_lte') || '')
    
    const filterProducts = (key, value) => {
        search.set(key, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '' )
        setPrice(search.get('price_lte' || ''))
        getProducts()
    }

    const handleChangeType = (e, value) => {
        search.set(e, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '')
        getProducts()
    }

    const resetFilter = () => {
        navigate('/')
        setType('')
        setPrice('')
        getProducts()
    }

    return (
        <Box 
        sx={{flexGrow: 1}}>
            <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                <Grid >
                    <Paper elevation={9}>
                        <FormControl component='fieldset' >
                            <RadioGroup 
                            style={{justifyContent:'center', flexDirection: '-moz-initial'}}
                            aria-label='gender'
                            name='gender1'
                            value={type}
                            onChange={(e) => handleChangeType('type', e.target.value)} 
                            >
                                <FormControlLabel
                                    value='Купе'
                                    control={<Radio 
                                    style={{color: 'black'}}/>}
                                    label='Купе'
                                />
                                <FormControlLabel
                                   value='Седан'
                                   control={<Radio 
                                   style={{color: 'black'}}/>}
                                   label='Седан'
                                />
                                <FormControlLabel
                                   value='Универсал'
                                   control={<Radio 
                                   style={{color: 'black'}}/>}
                                   label='Универсал'
                                />
                                <FormControlLabel
                                   value='Хэтчбек'
                                   control={<Radio 
                                   style={{color: 'black'}}/>}
                                   label='Хэтчбек'
                                />
                                <FormControlLabel
                                   value='Кроссовер'
                                   control={<Radio 
                                   style={{color: 'black'}}/>}
                                   label='Кроссовер'
                                />
                            </RadioGroup>
                            <input type="number"
                            style={{ width: '18rem', margin: '10px',justifyContent: 'center', display: 'flex' }}
                             onChange={(e) => filterProducts('price_lte', e.target.value)}
                             valueLabelDisplay='auto'
                             min={0}
                             max={120000}
                             step={10000} /> 
                             <Button
                        style={{width: '80%', display: 'flex', justifyContent: 'center', margin: 'auto', marginLeft: '35px', marginBottom: '10px' }}
                       onClick={resetFilter}
                       variant='dark'
                       >
                           Сбросить
                       </Button>
                       
                        </FormControl>


                        <Grid>
                         
                        </Grid>
                       
                    </Paper>
                    
                </Grid>
        
            </Grid>
         
        </Box>
         
    );
};

export default Sidebar;