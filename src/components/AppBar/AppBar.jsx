import { ReactComponent as Logo } from '../../images/BarbershopLogo.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, Menu, MenuItem, IconButton, MenuList, Box, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './AppBar.module.css';

export default function AppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const classes = ({ isActive }) => isActive ? [styles.accent, styles.link].join(' ') : [styles.main, styles.link].join(' ');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const activeStyle = {
    color: '#FF6C00',
    textDecoration: 'underline'
  };

  return (
    <>
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: { xs: 'space-between', md: 'initial' }, gap: { md: '30px', lg: '70px' }, py: { xs: '40px', md: '32px' } }}>
        <NavLink to='/'>
          <Logo width='67' height='56' className={styles.logo} />
        </NavLink>
        <nav>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label='user authentication menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              }}>
              <MenuItem key='about' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>
                  <NavLink to='/about' style={({ isActive }) => isActive ? activeStyle : undefined }>About us</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key='prices' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>
                  <NavLink to='/prices' style={({ isActive }) => isActive ? activeStyle : undefined }>Services and prices</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key='masters' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>
                  <NavLink to='/masters' style={({ isActive }) => isActive ? activeStyle : undefined }>Masters</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key='contacts' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>
                  <NavLink to='/contacts' style={({ isActive }) => isActive ? activeStyle : undefined }>Contacts</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key='phone' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>
                  <Link href='tel:+380441111111'>+38 044 111 11 11</Link>
                </Typography>
              </MenuItem>
              <MenuItem key='appointment' onClick={handleCloseNavMenu}>
                <Typography textAlign='center' textTransform='uppercase'>
                  <NavLink to='/appointment' style={({ isActive }) => isActive ? activeStyle : undefined }>Appointment</NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { lg: '150px' } }}>
            <MenuList sx={{ display: 'flex', alignItems: 'center', gap: { lg: '8px' } }}>
              <MenuItem key='about'>
                <Typography textAlign='center'>
                  <NavLink to='/about' style={({ isActive }) => isActive ? activeStyle : undefined }>About us</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key='prices'>
                <Typography textAlign='center'>
                  <NavLink to='/prices' style={({ isActive }) => isActive ? activeStyle : undefined }>Services and prices</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key='masters'>
                <Typography textAlign='center'>
                  <NavLink to='/masters' style={({ isActive }) => isActive ? activeStyle : undefined }>Masters</NavLink>
                </Typography>
              </MenuItem>
              <MenuItem key='contacts'>
                <Typography textAlign='center'>
                  <NavLink to='/contacts' style={({ isActive }) => isActive ? activeStyle : undefined }>Contacts</NavLink>
                </Typography>
              </MenuItem>
            </MenuList>
            <MenuList sx={{ display: 'flex', alignItems: 'center', gap: { lg: '8px' }, marginLeft: { md: 'auto' } }}>
              <MenuItem key='phone'>
                <Typography textAlign='center'>
                  <Link href='tel:+380441111111' sx={{ textDecoration: 'none' }}>+38 044 111 11 11</Link>
                </Typography>
              </MenuItem>
              <MenuItem key='appointment'>
                <Typography textAlign='center' textTransform='uppercase' sx={{ marginLeft: 'auto' }}>
                  <NavLink to='/appointment' style={({ isActive }) => isActive ? activeStyle : undefined }>Appointment</NavLink>
                </Typography>
              </MenuItem>
            </MenuList>
          </Box>
        </nav>
      </Toolbar>
    </>
  );
}
