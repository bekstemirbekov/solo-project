import React, { useContext, useState } from 'react';
import { styled} from '@mui/material/styles'
import { useNavigate } from 'react-router';

import { Box, FormControl, FormLabel, Grid, Paper, RadioGroup, Slider, Radio, FormControlLabel, Select } from '@mui/material';
import { Button, InputGroup} from 'react-bootstrap'
import { productContext } from '../../../Contexts/ProductContext';
import DropdownMenu from '@restart/ui/esm/DropdownMenu';




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

    return(
           <Box 
                sx={{flexGrow: 1 }} marginTop='8rem' marginLeft='7rem' >
                    <Grid container spacing={15} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
                        <Grid >
                            <Paper elevation={9} >
                                <FormControl component='fieldset' style={{background: '#222222'}} >
                                    <RadioGroup 
                                    style={{justifyContent:'center', flexDirection: '-moz-initial'}}
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={type}
                                    onChange={(e) => handleChangeType('type', e.target.value)} 
                                    >
                                        <FormControlLabel
                                        style={{
                                            color: 'white'
                                        }}
                                        value='Snacks'
                                        control={<Radio 
                                        style={{color: '#29d9d5'}}/>}
                                        label='Snaks'
                                        />
                                        <FormControlLabel
                                        style={{
                                            color: 'white'
                                        }}
                                        value='Alcohol'
                                        control={<Radio 
                                        style={{color: '#29d9d5'}}/>}
                                        label='Alcohol'
                                        />
                                        <FormControlLabel
                                        style={{
                                            color: 'white'
                                        }}
                                        value='T-shirts'
                                        control={<Radio 
                                        style={{color: '#29d9d5'}}/>}
                                        label='T-shirts'
                                        />
                                        <FormControlLabel
                                        style={{
                                            color: 'white'
                                        }}
                                        value='Souvenirs'
                                        control={<Radio 
                                        style={{color: '#29d9d5'}}/>}
                                        label='Souvenirs'
                                        />
                                        <FormControlLabel
                                        style={{
                                            color: 'white'
                                        }}
                                        value='Carpets'
                                        control={<Radio 
                                        style={{color: '#29d9d5'}}/>}
                                        label='Carpets'
                                        />
                                    </RadioGroup>
                                    <Grid>
                                    <Slider
                                    style={{
                                        width: '80%',
                                        marginLeft: '3rem',
                                        margin: '1.5rem',
                                        color: '#29d9d5'
                                        
                                    }}
                                    onChange={(e) => filterProducts('price_lte', e.target.value)}
                                    valueLabelDisplay="auto"
                                    min={5}
                                    max={2000}
                                    step={2}
                                    />
                                    </Grid>
                                  
                                   
                                    <Button
                                        style={{width: '60%', display: 'flex', justifyContent: 'center', margin: 'auto', marginLeft: '6rem', marginBottom: '10px' }}
                                    onClick={resetFilter}

                                    > 
                                        Reset
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