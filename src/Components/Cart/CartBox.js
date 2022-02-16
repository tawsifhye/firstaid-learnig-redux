import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { DataContext } from '../../Context/DataProvider';

const CartBox = () => {

    const [cart, setCart] = useContext(DataContext);
    console.log(cart);

    const deleteItem = (item) => {
        const newCart = cart.filter(cart => (cart.id !== item.id))
        setCart(newCart);
    }

    return (

        <Box sx={{ backgroundColor: '#EDF5FF', py: '50px' }}>
            <Container sx={{
                background: '#FFFFFF',
                borderRadius: '10px',
                width: 550
            }}>
                <Typography variant='h4'>Shopping Cart</Typography>

                <Box>
                    <TableContainer >
                        <Table sx={{ width: 450 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Course Name</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.title}
                                        </TableCell>
                                        <TableCell align="right">${item.regularPrice}</TableCell>
                                        <TableCell align="right">
                                            {item.quantity}
                                        </TableCell>
                                        <TableCell align="right">${parseFloat(item.regularPrice - item.regularPrice * .75) * item.quantity.toFixed(2)}</TableCell>
                                        <TableCell align="right"><ClearIcon onClick={() => deleteItem(item)} /> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>
            </Container>

        </Box>


    );
};

export default CartBox;