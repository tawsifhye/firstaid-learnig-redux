import { AppBar, Button, Container, IconButton, InputAdornment, Menu, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import logo from '../images/logo.png'
import PrimaryButton from './shared/PrimaryButton';


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
    }
}


const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

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
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={logo} alt="" />
                    </Typography>

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
                                <Button href="#outlined-buttons" sx={Styles.navlink}>
                                    All Courses
                                </Button>
                                <Button href="#outlined-buttons" sx={Styles.navlink}>
                                    Student ID Card
                                </Button>
                                <Button href="#outlined-buttons" sx={Styles.navlink}>
                                    Contact
                                </Button>
                            </Box>
                        </Menu>
                    </Box>


                    <Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src={logo} style={{ width: '75%' }} alt="" />
                        </Typography>
                        <TextField id="outlined-basic" label="Search" variant="outlined" InputProps={{
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
                        <TextField id="outlined-basic" label="Search" variant="outlined" InputProps={{
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
                            <Button href="#outlined-buttons" sx={Styles.navlink}>
                                All Courses
                            </Button>
                            <Button href="#outlined-buttons" sx={Styles.navlink}>
                                Student ID Card
                            </Button>
                            <Button href="#outlined-buttons" sx={Styles.navlink}>
                                Contact
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <PrimaryButton text="Login" />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;