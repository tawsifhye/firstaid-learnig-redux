import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';

const CartBox = () => {

    const [cart] = useContext(DataContext);
    return (

        <Box sx={{ backgroundColor: '#EDF5FF', py: '50px' }}>
            <Container sx={{
                background: '#FFFFFF',
                borderRadius: '10px'
            }}>
                <Typography variant='h4'>Shopping Cart</Typography>

                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="right">{ }</TableCell>
                                    <TableCell align="right">{ }</TableCell>
                                    <TableCell align="right">{ }</TableCell>
                                    <TableCell align="right">{ }</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>

        </Box>


    );
};

export default CartBox;