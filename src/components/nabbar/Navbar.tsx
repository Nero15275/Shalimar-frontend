import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
// import AdbIcon from '@mui/icons-material/Adb';
import './navbar.scss'

const pages = [{ name: 'home', route: '/' }];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate()

    const handleClickCart = () => {
        navigate('/cart')
    }

    return (
        <AppBar position="static" color='transparent'>
            <Container maxWidth="xl">
                <Toolbar disableGutters className='toolbar' >
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Link className={'link'} to={'/'}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}

                        >
                            <img src="	https://totalfoods.in/static/images/logo.png" alt="" />
                        </Typography></Link>




                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                sx={{ my: 2, color: 'success', display: 'block' }}
                            >
                                <Link className={'link'} to={page.route} key={page.name} >
                                    {page.name}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }} className='cart-box-nav' onClick={handleClickCart}>
                        <div className="text-title">My cart</div>
                        <div className='cart-icon'>
                            <img src="https://totalfoods.in/static/images/top_cart.png" alt="" />
                        </div>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default Navbar;
