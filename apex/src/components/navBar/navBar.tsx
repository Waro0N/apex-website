import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ApexLogo from '../../assets/Apex_Logo2.png';
import { useNavigate } from 'react-router-dom';
import './navBar.css';
import { Grid } from "@mui/material"

const pages = ['Home', 'Projects', 'Services', 'Careers', 'About', 'Contact us'];

const ApexNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElCareers, setAnchorElCareers] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenCareersMenu = (event: React.MouseEvent<HTMLElement>, key: string) => {
    if (key === "Careers") {
      setAnchorElCareers(event.currentTarget);
    } else if (key === "About") {
      navigate("/about");
    } else if (key === "Contact us") {
      navigate("/contact");
    } else if (key === "Projects") {
      navigate("/projects");
    } else if (key === "Services") {
      navigate("/services");
    } else {
      navigate("/");
    }
  };

  const handleCloseCareersMenu = () => {
    setAnchorElCareers(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#FFFFFF', color: '#084c44', boxShadow: '10px 2px 30px rgba(0, 0, 0, 0.5)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={ApexLogo} alt="Logo" className='ApexLogo' style={{ width: 70, marginRight: 5, alignItems: 'center' }} />
          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 60,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Arial',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            APEX ENGINEERS AND CONSULTANTS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Menu
            id="careers-menu"
            anchorEl={anchorElCareers}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElCareers)}
            onClose={handleCloseCareersMenu}
          >
            <MenuItem onClick={handleCloseCareersMenu}>
              <Typography>Career Option 1</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseCareersMenu}>
              <Typography>Career Option 2</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseCareersMenu}>
              <Typography>Career Option 3</Typography>
            </MenuItem>
          </Menu>

          <Box sx={{ display: 'flex' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(e) => handleOpenCareersMenu(e, page)}
                sx={{ my: 2, color: '#084c44' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    
  );
};

export default ApexNav;
