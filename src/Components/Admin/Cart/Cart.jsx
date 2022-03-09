import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button, CardActions, IconButton, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { productContext } from '../../../Contexts/ProductContext';
import { calcTotalPrice } from '../../../Helpers/CalcPrise';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Cart({item}) {
    const {cart, getCart, changeProductCount, deleteProductInCart} = React.useContext(productContext)
    React.useEffect(() => {
      getCart()
    }, [])


 
    
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Phot</StyledTableCell>
            <StyledTableCell align="right">name(g)</StyledTableCell>
            <StyledTableCell align="right">Price(g)</StyledTableCell>
            <StyledTableCell align="right">number(g)</StyledTableCell>
            <StyledTableCell align="right">Total price(g)</StyledTableCell>
            <StyledTableCell align="right">clean(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products ? (
              <>
                {cart.products.map((elem) => (
                    <StyledTableRow key={elem.item.id}>
                        <StyledTableCell component='th' scope='row'>
                            <img width='150' src={elem.item.image}/>
                        </StyledTableCell>
                        <StyledTableCell  align='right'>
                            {elem.item.title}
                        </StyledTableCell>
                        <StyledTableCell  align='right'>
                            {elem.item.price}
                        </StyledTableCell> 
                        <StyledTableCell align='right'>
                            <input 
                                type='number'
                                value={elem.count}
                                onChange={(e) =>
                                changeProductCount(e.target.value, elem.item.id)}
                            />
                        </StyledTableCell>
                        <StyledTableCell  align='right'>
                            {elem.subPrice}
                        </StyledTableCell>
                        <StyledTableCell align='center' onClick={() => deleteProductInCart(elem.item.id)}>
                          <DeleteIcon/>
                        </StyledTableCell>
                        {/* {icons} */}
                    </StyledTableRow>
                ))}
              </>
          ) : (null)}
          <TableRow>
              <TableCell rowSpan={3}/>
              <TableCell colSpan={2}>
                    <Typography variant='h4'>
                        Total price:
                    </Typography>                        
              </TableCell>
              {
                  cart.products ? (
                      <TableCell align='right'>
                          <Typography variant='h5'>{calcTotalPrice(cart.products)}</Typography>
                      </TableCell>
                  ) : (null)
              }
          </TableRow>
          

          <TableRow>
            <Link to='/pay' style={{textDecoration: 'none'}}>
            <TableCell colSpan={3} align='right'>
                  <Button  style={{
                    padding: ".2rem 2rem",
                    fontSize: "1rem",
                    color: "aqua",
                    border: ".2rem solid aqua",
                    borderRadius: "5rem",
                    cursor: "pointer",
                    background: "black"
                  }}>Buy</Button>
              </TableCell>
            </Link>
            <Link to='/' style={{textDecoration: 'none'}}> 
                <TableCell colSpan={3} align='right'>
                  <Button  style={{padding: ".2rem 2rem",
            fontSize: "1rem",
            color: "aqua",
            border: ".2rem solid aqua",
            borderRadius: "5rem",
            cursor: "pointer",
            background: "black"}}>Go back</Button>
                </TableCell>
            </Link>

              
          </TableRow> 
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}
