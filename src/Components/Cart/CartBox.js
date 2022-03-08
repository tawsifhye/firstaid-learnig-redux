import {
    Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, TextField, Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { addSubTotal, addVat, addTotal, calculateDiscount, addCupon, increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/action"

const CartBox = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const { cart, subTotal, totalVat, totalPrice, discountPrice, cuponUsed } = state;
    const vat = 0.15;

    const [cupon, setCupon] = useState('');


    // console.log(discount)
    let total = 0;

    let finalTotal = 0;
    useEffect(() => {
        cart.forEach(element => {
            total = total + element.quantity * parseFloat(element.regularPrice - element.regularPrice * .75)
            dispatch(addSubTotal(total));
            dispatch(addVat(subTotal * vat));
            finalTotal = total + totalVat;
            dispatch(addTotal(finalTotal));
        });
        if (!cart.length) {
            dispatch(addSubTotal(0));
            dispatch(addVat(0));
            dispatch(addTotal(0));
        }
    }, [total, finalTotal, cart, totalVat, totalPrice])


    const deleteItem = (item) => {
        dispatch(removeFromCart(item.id));
    }

    const handleCuponChange = (e) => {
        setCupon(e.target.value)
    }

    const handleDiscount = () => {

        if (cupon === 'discount') {
            dispatch(calculateDiscount(totalPrice / 2));
            dispatch(addCupon(true));
        }
        else if (cupon === '') {
            alert('Enter a cupon code');
        }
        else {
            alert('Wrong Code');
        }

    };

    const handleQuantity = (item, type) => {
        if (type === 'increase') {
            dispatch(increaseQuantity(item.id))
            dispatch(addCupon(false));
        }
        else {
            dispatch(decreaseQuantity(item.id))
            dispatch(addCupon(false));
        }
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
                        <Table sx={{ width: 500 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Course Name</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Regular Price</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Discount Price</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Total</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart?.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.title}
                                        </TableCell>
                                        <TableCell align="right">${item.regularPrice}</TableCell>
                                        <TableCell align="right">${parseFloat(item.regularPrice - item.regularPrice * .75)}</TableCell>
                                        <TableCell align="right">
                                            <AiOutlinePlus onClick={() => handleQuantity(item, 'increase')} />
                                            {item.quantity}
                                            <AiOutlineMinus onClick={() => handleQuantity(item, 'decrease')} />
                                        </TableCell>
                                        <TableCell align="right">${parseFloat(item.regularPrice - item.regularPrice * .75) * item.quantity}</TableCell>
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
                        onBlur={handleCuponChange}
                    />

                    <Button
                        variant="contained"
                        onClick={handleDiscount}
                        disabled={cuponUsed}
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
                        <Typography>${totalVat}</Typography>
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
                        <Typography>${!cuponUsed ? totalPrice : discountPrice}</Typography>
                        {/* <Typography>${totalPrice}</Typography> */}
                    </Box>
                    <Button variant="contained">Proceed To Checkout</Button>
                </Box>
            </Container>

        </Box>


    );
};

export default CartBox;