import { AppBar, Button, Container, IconButton, InputAdornment, Menu, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png'
import PrimaryButton from './PrimaryButton';
import LoginModal from '../Home/LoginModal';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { DataContext } from '../../Context/DataProvider';



const Styles = {
    navlink: {
        color: '#4A5074',
        fontWeight: 'bold',
        fontSize: {
            lg: '20.175px',
        },
        textTransform: 'capitalize'
    },
    loginButton: {
        fontWeight: 'bold',
        borderRadius: '11.21px',
        width: {
            xs: '100px',
            md: '152.43px'
        },
        height: '67.25px'
    },
    /* modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '665px',
        backgroundColor: 'background.paper',
        background: '#FFFFFF',
        borderRadius: '2px',
        boxShadow: 24,
        p: 4,
    },
    form: {
        width: '100%',
        border: '1px solid #767676',
        boxSizing: 'border-box',
        borderRadius: '5px'

    },
    label: {
        fontWeight: 600,
        fontSize: '12px',
        color: '#494949',
        mb: 1,
    } */
}


const Navbar = () => {
    const [cart] = useContext(DataContext);
    const [registered, setRegistered] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: 'white',
            boxShadow: 'none',
            padding: '40px 0px'
        }}>
            <Container sx={{
                maxWidth: {
                    lg: 'lg',
                    xl: 'xl'
                }
            }}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={logo} alt="" />
                    </Typography>




                    <Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src={logo} style={{ width: '75%' }} alt="" />
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Search" InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}

                            sx={{
                                mt: 2,
                                display: {
                                    md: 'none'
                                }
                            }} />
                    </Box>



                    <Box sx={{
                        flexGrow: 1,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    }}>
                        <TextField id="outlined-basic" placeholder="Search" variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }} />

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexBasis: "500px"
                        }}>

                            <Link to='/home' style={{ textDecoration: 'none' }}>
                                <Button sx={Styles.navlink}>
                                    Home
                                </Button>
                            </Link>




                            <Button href="#outlined-buttons" sx={Styles.navlink}>
                                All Courses
                            </Button>
                            <Button href="#outlined-buttons" sx={Styles.navlink}>
                                Blogs
                            </Button>
                            <Button href="#outlined-buttons" sx={Styles.navlink}>
                                Contact
                            </Button>

                            <Button sx={{ ...Styles.navlink, position: 'relative' }}>
                                <Link to='/cart' style={{ textDecoration: 'none' }}>
                                    < FaShoppingCart style={Styles.navlink} />
                                </Link>
                                <Box sx={{ position: 'absolute', top: 0, right: 0, p: 0 }}>
                                    {cart.length}
                                </Box>
                            </Button>


                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>

                        <PrimaryButton onClick={handleOpen} text="Login" />
                        <LoginModal handleClose={handleClose} open={open} registered={registered} setRegistered={setRegistered} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ color: 'black' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Link to='/home' style={{ textDecoration: 'none' }}>
                                    <Button sx={Styles.navlink}>
                                        Home
                                    </Button>
                                </Link>
                                <Button href="#outlined-buttons" sx={Styles.navlink}>
                                    All Courses
                                </Button>
                                <Button href="#outlined-buttons" sx={Styles.navlink}>
                                    Blogs
                                </Button>
                                <Button href="#outlined-buttons" sx={Styles.navlink}>
                                    Contact
                                </Button>

                                <Button sx={{ ...Styles.navlink, position: 'relative' }}>
                                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                                        < FaShoppingCart style={Styles.navlink} />
                                    </Link>
                                    <Box sx={{ position: 'absolute', top: 0, right: 0, p: 0 }}>
                                        {cart.length}
                                    </Box>
                                </Button>


                            </Box>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    );
};

export default Navbar;