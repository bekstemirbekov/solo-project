import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import mago from '../../../images/iki.jpeg'
import { productContext } from '../../../Contexts/ProductContext';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MyNavbar() {
  const { cartLength, getProducts, useAuth, logout, starLength} = React.useContext(productContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchVal, setSearchVal] = React.useState(searchParams.get('q') ? searchParams.get('q') : '')
  console.log(starLength);
  const currentUser = useAuth()

  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    setSearchParams({
      'q' : searchVal,
      '_limit' : 3,
      '_page' : 1
    })
  }, [searchVal])

  const handleValue =(e) => {
    const search = new URLSearchParams(window.location.search)
    search.set('q', e.target.value)
    setSearchVal(e.target.value)
    setSearchParams({
      'q': searchVal,
      '_limit': 3,
      '_page' : 1
    })
    getProducts()
  }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
          <Link style={{textDecoration: 'none'}} to={!currentUser ?'/login' : '#'}>
          <MenuItem disabled={currentUser ? true : false} onClick={handleMenuClose}>Sign in</MenuItem>
          </Link>
      
     
      <Link style={{textDecoration: 'none'}} to={!currentUser ?'/register' : '#'}>
      <MenuItem disabled={currentUser ? true : false} onClick={handleMenuClose}>Sign up</MenuItem>
      </Link>
      {
            currentUser ? (
              <Button variant='success' disabled={!currentUser} onClick={handleLogout} >go out</Button>
            ) : null
          }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

        <Link to='/cart' style={{color: 'red'}}>
            <IconButton color='inherit'>
                <Badge badgeContent={cartLength} style={{color: '#29d9d5'}}>
                    <AddShoppingCartIcon/>
                </Badge>
            </IconButton>
        </Link>

        <Link to='/star' style={{color: 'red'}}>
            <IconButton color='inherit'>
                <Badge badgeContent={starLength} style={{color: '#29d9d5'}}>
                    <BookmarkIcon/>
                </Badge>
            </IconButton>
        </Link>
     <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
   

  return (
    <Box fullWidth sx={{ flexGrow: 1 }} >
      <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none', backgroundAttachment: 'scroll', backgroundColor: 'black', backgroundSize: 'cover'}}
      >
        
        
        <Toolbar>
          <IconButton>
            <img src={mago} width='40px' />
          </IconButton>
          {/* <Link to='/main' style={{textDecoration: 'none', color: 'white'}}> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography> */}
          {/* </Link> */}
         
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchVal}
              onChange={handleValue}
            />
          </Search>
          <Link to='/main' style={{textDecoration: 'none'}}>
          <Button
            style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1rem 0',
            display: 'inline-block',
            padding: '.2rem 1.5rem',
            fontSize: '.7rem',
            color: 'white',
            border: '0.2rem solid #29d9d5',
            borderRadius: '5rem',
            cursor: 'pointer',
            background: '#2222222',
            textAlign: 'center'
            
          }}
          >
            Main
          </Button>
          </Link>
          
         
          <Box sx={{ flexGrow: 1 }} />
          {currentUser?.email === 'admin@gmail.com' ? (
            <Link to='/add' style={{textDecoration: 'none'}}>
              <Button 
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1rem 0',
                display: 'inline-block',
                padding: '.2rem 1.5rem',
                fontSize: '.7rem',
                color: 'white',
                border: '0.2rem solid #29d9d5',
                borderRadius: '5rem',
                cursor: 'pointer',
                background: '#2222222',
                textAlign: 'center'
                
              }}>Add</Button>
            </Link>
          ): null}
          {currentUser?.email}
         
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to='/cart' style={{color: 'white'}}>
              <IconButton>
                <Badge badgeContent={cartLength} color='secondary'>
                  <AddShoppingCartIcon sx={{color: '#29d9d5'}}/>
                </Badge>
              </IconButton>

          </Link>
          <Link to='/star' style={{color: 'white'}}>
              <IconButton>
                <Badge badgeContent={starLength} color='secondary'>
                  <BookmarkIcon sx={{color: '#29d9d5' }}/>
                </Badge>
              </IconButton>

          </Link>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
     
       
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
   
  );
}
