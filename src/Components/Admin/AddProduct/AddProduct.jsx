import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductContext';
import { borderRadius } from '@mui/system';


export default function AddProduct() {
    const [values, setValues] = React.useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: ''
    })

    const {addProduct} = React.useContext(productContext)

    const navigate = useNavigate()

    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if(!values.image)values.image = 'https://ethno.market/wa-data/public/shop/products/34/28/2834/images/12542/12542.750.jpg'
        addProduct({...values, price: +values.price, type: type}) 
        navigate('/')
    }

    const [type, setType] = React.useState('');

    const handleChange = (e) => {
        setType(e.target.value);
      };

    // const [model, setModel] = React.useState('');

    // const handleModelChange = (e) => {
    //   setModel(e.target.value)
    // }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: '40px auto',
          maxWidth: 1000,
          height: 'auto',
        },
      }}
    >
      <Paper elevation={3} 
      style={{backgroundColor: ''}}
      >
        <h1 style={{textAlign: 'center', width: '100%', backgroundColor: '#222222', color: '#29d9d5', fontSize: '2rem'}}>Add something for sale</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
            <div style={{marginLeft: '30px'}} >
                <img width='450' src={values.image ? values.image : 'https://avatars.mds.yandex.net/i?id=2a0000017a11bc9edaed99598d76b59a1be5-4032833-images-thumbs&n=13'} alt='' />
            </div>
            <div style={{
                width: '450px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <form noValidate autoComplete='off' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextField 
                      style={{padding: '10px'}} 
                      name='title'
                      onChange={handleInp} 
                      value={values.title} 
                      variant='outlined' 
                      label='Name of product
                      '/>
                     
                    <TextField 
                      style={{padding: '10px'}} 
                      name='image'
                      onChange={handleInp} 
                      value={values.image} 
                      variant='outlined' 
                      label='Image
                      '/>
                    <TextField 
                      style={{padding: '10px'}} 
                      name='price'
                      onChange={handleInp} 
                      value={values.price} 
                      variant='outlined' 
                      label='Price
                      '/>
                     <FormControl style={{ width: '200px'}}>
                        <InputLabel id="demo-simple-select-label">Type of product</InputLabel>
                        <Select
                         style={{padding: '-7px'}} 
                         name='type'
                         value={type} 
                         variant='outlined' 
                         label='Type'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        >
                        <MenuItem value={'Snacks'}>Snacks</MenuItem>
                        <MenuItem value={'Alcohol'}>Alcohol</MenuItem>
                        <MenuItem value={'T-shirts'}>T-shirts</MenuItem>
                        <MenuItem value={'Souvenirs'}>Souvenirs</MenuItem>
                        <MenuItem value={'Carpets'}>Carpets</MenuItem>

                        </Select>
                    </FormControl>
                    <TextField 
                      style={{padding: '10px'}} 
                      name='description'
                      onChange={handleInp} 
                      value={values.description} 
                      variant='outlined' 
                      label='Description about product'/>
                </form>
                <Button style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '1rem 0',
                  display: 'inline-block',
                  padding: '.5rem 3rem',
                  fontSize: '1rem',
                  color: 'white',
                  border: '0.2rem solid #29d9d5',
                  borderRadius: '5rem',
                  cursor: 'pointer',
                  background: '#222222',
                  textAlign: 'center'
                  
                }} onClick={handleSave} > 
                    Add to sale
                </Button>
            </div>
        </div>
      </Paper>

    </Box>
  );
}



