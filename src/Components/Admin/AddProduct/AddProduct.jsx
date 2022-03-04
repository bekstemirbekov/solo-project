import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductContext';

export default function AddProduct() {
    const [values, setValues] = React.useState({
        title: '',
        model: '',
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
        if(!values.image)values.image = 'https://avatars.mds.yandex.net/i?id=94499ce916aaac7cacfeb4523954994c-4272095-images-thumbs&n=13'
        addProduct({...values, price: +values.price, type: type, model: model}) 
        navigate('/')
    }

    const [type, setType] = React.useState('');

    const handleChange = (e) => {
        setType(e.target.value);
      };

    const [model, setModel] = React.useState('');

    const handleModelChange = (e) => {
      setModel(e.target.value)
    }

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
      style={{backgroundColor: 'white'}}
      >
        <h1 style={{textAlign: 'center', width: '100%', backgroundColor: 'black', color: 'white'}}>Добавить авто</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
            <div style={{marginLeft: '30px'}} >
                <img width='400' src={values.image ? values.image : 'https://avatars.mds.yandex.net/i?id=94499ce916aaac7cacfeb4523954994c-4272095-images-thumbs&n=13'} alt='' />
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
                      label='Авто
                      '/>
                      <FormControl style={{ width: '200px'}}>
                        <InputLabel id="demo-simple-select-label">Класс</InputLabel>
                        <Select
                         style={{padding: '-5px'}} 
                         name='model'
                         value={model} 
                         variant='outlined' 
                         label='Model'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleModelChange}
                        >
                        <MenuItem value={'Эконом'}>Эконом</MenuItem>
                        <MenuItem value={'Средний'}>Средний</MenuItem>
                        <MenuItem value={'Бизнес'}>Бизнес</MenuItem>
                        <MenuItem value={'Спорт'}>Спорт</MenuItem>
                        {/* <MenuItem value={'Универсал'}>Универсал</MenuItem> */}
                        </Select>
                    </FormControl>
                    <TextField 
                      style={{padding: '10px'}} 
                      name='image'
                      onChange={handleInp} 
                      value={values.image} 
                      variant='outlined' 
                      label='Фото
                      '/>
                    <TextField 
                      style={{padding: '10px'}} 
                      name='price'
                      onChange={handleInp} 
                      value={values.price} 
                      variant='outlined' 
                      label='Стоимость
                      '/>
                     <FormControl style={{ width: '200px'}}>
                        <InputLabel id="demo-simple-select-label">Тип</InputLabel>
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
                        <MenuItem value={'Седан'}>Седан</MenuItem>
                        <MenuItem value={'Кроссовер'}>Кроссовер</MenuItem>
                        <MenuItem value={'Хэтчбек'}>Хэтчбек</MenuItem>
                        <MenuItem value={'Купе'}>Купе</MenuItem>
                        <MenuItem value={'Универсал'}>Универсал</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField 
                      style={{padding: '10px'}} 
                      name='description'
                      onChange={handleInp} 
                      value={values.description} 
                      variant='outlined' 
                      label='Подробное описание'/>
                </form>
                <Button style={{backgroundColor: 'black', color: 'white'}} onClick={handleSave} variant='contained' > 
                    выставить
                </Button>
            </div>
        </div>
      </Paper>
    </Box>
  );
}
