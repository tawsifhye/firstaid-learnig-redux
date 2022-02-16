import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { DataContext } from '../../Context/DataProvider';

const CartBox = () => {
    const vat = 0.15;
    const [cart,
        setCart,
        totalPrice,
        setTotalPrice,
        subTotal,
        setSubTotal,
    ] = useContext(DataContext);
    console.log(vat);
    const [cupon, setCupon] = useState('');
    let total = 0;
    let finalTotal = 0;
    cart.forEach(element => {
        total = total + element.quantity * parseFloat(element.regularPrice - element.regularPrice * .75)
        setSubTotal(total);
        finalTotal = total + (subTotal * vat);
        setTotalPrice(finalTotal);
    });

    const deleteItem = (item) => {
        const newCart = cart.filter(cart => (cart.id !== item.id));
        setCart(newCart);
    }

    const handleCuponChange = (e) => {
        setCupon(e.target.value)
    }

    const handleDiscount = () => {
        if (cupon === 'discount') {
            const newTotal = finalTotal / 2;
            setTotalPrice(newTotal);
            console.log(newTotal, totalPrice);
            alert('You have got 50% discount!');
        }
        else if (cupon === '') {
            alert('Please enter a Cupon code');
        }
        else {

            alert('Wrong code');
        }
        console.log(totalPrice);
    }

    const increaseQuantity = (item) => {
        const newCart = cart.map(cartItem => {
            if (item.id === cartItem.id) {
                cartItem.quantity += 1
            }
            return cartItem;
        })
        setCart(newCart)
    }
    const decreaseQuantity = (item) => {
        const newCart = cart.map(cartItem => {
            if (item.id === cartItem.id) {
                if (item.quantity > 0) {
                    item.quantity = item.quantity - 1
                }
            }
            return cartItem;
        })
        setCart(newCart)
    }
    return (

        <Box sx={{ backgroundColor: '#EDF5FF', py: '50px' }}>
            <Container
                sx={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
                <Box sx={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    width: 500,
                    p: 3
                }}>
                    <Typography variant='h4'>Shopping Cart</Typography>
                    <TableContainer >
                        <Table sx={{ width: 450 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Course Name</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Total</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}></TableCell>
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
                                            <AiOutlinePlus onClick={() => increaseQuantity(item)} />
                                            {item.quantity}
                                            <AiOutlineMinus onClick={() => decreaseQuantity(item)} />
                                        </TableCell>
                                        <TableCell align="right">${parseFloat(item.regularPrice - item.regularPrice * .75) * item.quantity.toFixed(2)}</TableCell>
                                        <TableCell align="right"><ClearIcon onClick={() => deleteItem(item)} /> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box
                    sx={{
                        p: 2,
                        background: "#ED3B45",
                        borderRadius: "10px",
                        position: "relative",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ color: "#ffffff", fontWeight: "bold", mb: 1 }}
                    >
                        Busket Total
                    </Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Coupon Code"
                        sx={{ width: "100%", background: "#fff" }}
                        onChange={handleCuponChange}
                    />
                    <Button
                        variant="contained"
                        onClick={handleDiscount}
                        sx={{ position: "absolute", right: "20px", height: "55px" }}
                    >
                        Apply
                    </Button>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#fff",
                            mt: 2,
                            p: 2,
                            borderBottom: "1px solid #fff",
                        }}
                    >
                        <Typography>Subtotal</Typography>
                        <Typography>${subTotal}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#fff",
                            mt: 1,
                            p: 2,
                            borderBottom: "1px solid #fff",
                        }}
                    >
                        <Typography>Vat</Typography>
                        <Typography>${subTotal * vat}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#fff",
                            p: 2,
                        }}
                    >
                        <Typography>Total</Typography>
                        <Typography>${totalPrice}</Typography>
                    </Box>
                    <Button variant="contained">Proceed To Checkout</Button>
                </Box>
            </Container>

        </Box>


    );
};

export default CartBox;