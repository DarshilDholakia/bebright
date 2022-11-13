import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/BeBright-Logo.png'
import { border } from '@mui/system';
import authService from '../services/auth.service';
import { useNavigate } from "react-router-dom";

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Logout'];

function TimelineNavbar({ user }) {
    //   const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();

    //   const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    //   };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    //   const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    //   };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        authService.logout();
        navigate('/');
    };

    const handleProfileNavigate = () => {
        navigate('/profile');
    };

    return (
        <AppBar sx={{ 
            background: '#e2e2ab',
            // height: '80px'
            }} 
            position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box mx='auto' sx={{ 
                        flexGrow: 0, 
                        width: '60%',
                        display: 'flex',
                        justifyContent: 'space-between'
                        }}>
                        <img src={logo} alt="BeBright logo" width="60" height="60" />
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ 
                                pl: 0,
                                // float: 'right'
                                }}>
                                <Avatar sx={{ 
                                    width: "50px",
                                    height: "50px"
                                 }}
                                alt="Remy Sharp" 
                                src={user.profilePicURL} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={ setting === 'Logout' ? handleLogout : handleProfileNavigate }>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default TimelineNavbar;
