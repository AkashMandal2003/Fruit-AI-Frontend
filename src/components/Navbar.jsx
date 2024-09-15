import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,
    Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { AuthContext } from './AuthContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: 'linear-gradient(45deg, #3f51b5 30%, #1e88e5 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    zIndex: theme.zIndex.appBar,
}));

const StyledButton = styled(Button)({
    color: '#fff',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
        color: 'cyan',
        transform: 'scale(1.1)',
    },
});

const StyledLink = styled(Link)({
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
        color: 'cyan',
    },
});

const MenuLink = styled(MenuItem)({
    animation: `${fadeIn} 0.5s ease-out`,
});

function Navbar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <Slide in direction="down" timeout={500}>
            <StyledAppBar position="fixed" className={isScrolled ? 'scrolled' : ''}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Fruit.ai
                    </Typography>
                    {isSmallScreen ? (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenuOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleMenuClose}
                                PaperProps={{ style: { width: '200px' } }}
                            >
                                {[
                                    isLoggedIn && <MenuItem onClick={handleMenuClose} component={Link} key="link" to="/">Home</MenuItem>
                                    ,
                                    isLoggedIn && <MenuItem onClick={handleMenuClose} component={Link} key="chatbot" to="/chatbot">Chatbot</MenuItem>
                                    ,
                                    isLoggedIn && <MenuItem onClick={handleMenuClose} component={Link} key="prop" to="/translator">Translator</MenuItem>
                                    ,
                                    isLoggedIn && <MenuItem onClick={handleMenuClose} component={Link} key="faq" to="/faq">FAQ</MenuItem>,
                                    <MenuItem onClick={handleMenuClose} component={Link} key="about" to="/about">About</MenuItem>,

                                    isLoggedIn ? (
                                        <MenuItem key="logout" onClick={handleLogout}>
                                            Logout
                                        </MenuItem>
                                    ) : (
                                        <MenuItem key="login" onClick={handleLogin}>
                                            Login
                                        </MenuItem>
                                    ),
                                ]}
                            </Menu>

                        </>
                    ) : (
                        <>
                            {isLoggedIn && (
                                <>
                                    <StyledButton>
                                        <StyledLink to="/home">Home</StyledLink>
                                    </StyledButton>
                                    <StyledButton>
                                        <StyledLink to="/chatbot">Chatbot</StyledLink>
                                    </StyledButton>
                                    <StyledButton>
                                        <StyledLink to="/translator">Translator</StyledLink>
                                    </StyledButton>
                                    <StyledButton>
                                        <StyledLink to="/faq">FAQ</StyledLink>
                                    </StyledButton>
                                </>
                            )}
                            <StyledButton>
                                <StyledLink to="/about">About</StyledLink>
                            </StyledButton>
                            {isLoggedIn ? (
                                <StyledButton onClick={handleLogout}>Logout</StyledButton>
                            ) : (
                                <StyledButton onClick={handleLogin}>Login</StyledButton>
                            )}
                        </>
                    )}
                </Toolbar>
            </StyledAppBar>
        </Slide>
    );
}

export default Navbar;



// import React, { useState, useContext, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//     AppBar,
//     Toolbar,
//     Button,
//     Typography,
//     useMediaQuery,
//     useTheme,
//     Slide,
//     Box,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { keyframes } from '@emotion/react';
// import { AuthContext } from './AuthContext';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(-10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//     background: 'linear-gradient(45deg, #3f51b5 30%, #1e88e5 90%)',
//     boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
//     zIndex: theme.zIndex.appBar,
// }));

// const StyledButton = styled(Button)({
//     color: '#fff',
//     transition: 'color 0.3s ease-in-out',
//     '&:hover': {
//         color: 'cyan',
//         transform: 'scale(1.1)',
//     },
// });

// const StyledLink = styled(Link)({
//     color: '#fff',
//     textDecoration: 'none',
//     margin: '0 10px',
//     transition: 'color 0.3s ease-in-out',
//     '&:hover': {
//         color: 'cyan',
//     },
// });

// const MenuLink = styled(Button)({
//     animation: `${fadeIn} 0.5s ease-out`,
//     textAlign: 'center',
//     width: '100%',
//     padding: '10px',
//     marginBottom: '8px',
//     color: '#fff',
//     '&:hover': {
//         color: 'cyan',
//     },
// });

// function Navbar() {
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//     const [isScrolled, setIsScrolled] = useState(false);
//     const { isLoggedIn, logout } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleScroll = () => {
//         if (window.scrollY > 50) {
//             setIsScrolled(true);
//         } else {
//             setIsScrolled(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

//     const handleLogin = () => {
//         navigate('/login');
//     };

//     return (
//         <Slide in direction="down" timeout={500}>
//             <StyledAppBar position="fixed" className={isScrolled ? 'scrolled' : ''}>
//                 <Toolbar>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexDirection: isSmallScreen ? 'column' : 'row',
//                             alignItems: isSmallScreen ? 'flex-start' : 'center',
//                             width: '100%',
//                             gap: isSmallScreen ? 1 : 0,
//                             justifyContent: isSmallScreen ? 'center' : 'space-between',
//                         }}
//                     >
//                         <Typography variant="h6" style={{ flexGrow: isSmallScreen ? 0 : 1, textAlign: isSmallScreen ? 'center' : 'left' }}>
//                             Fruit.ai
//                         </Typography>
//                         {isSmallScreen ? (
//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     width: '100%',
//                                     gap: 1,
//                                 }}
//                             >
//                                 {isLoggedIn && (
//                                     <>
//                                         <MenuLink onClick={() => navigate('/home')}>
//                                             <StyledLink to="/home">Home</StyledLink>
//                                         </MenuLink>
//                                         <MenuLink onClick={() => navigate('/chatbot')}>
//                                             <StyledLink to="/chatbot">Chatbot</StyledLink>
//                                         </MenuLink>
//                                         <MenuLink onClick={() => navigate('/translator')}>
//                                             <StyledLink to="/translator">Translator</StyledLink>
//                                         </MenuLink>
//                                         <MenuLink onClick={() => navigate('/faq')}>
//                                             <StyledLink to="/faq">FAQ</StyledLink>
//                                         </MenuLink>
//                                     </>
//                                 )}
//                                 <MenuLink onClick={() => navigate('/about')}>
//                                     <StyledLink to="/about">About</StyledLink>
//                                 </MenuLink>
//                                 {isLoggedIn ? (
//                                     <MenuLink onClick={handleLogout}>Logout</MenuLink>
//                                 ) : (
//                                     <MenuLink onClick={handleLogin}>Login</MenuLink>
//                                 )}
//                             </Box>
//                         ) : (
//                             <>
//                                 {isLoggedIn && (
//                                     <>
//                                         <StyledButton>
//                                             <StyledLink to="/home">Home</StyledLink>
//                                         </StyledButton>
//                                         <StyledButton>
//                                             <StyledLink to="/chatbot">Chatbot</StyledLink>
//                                         </StyledButton>
//                                         <StyledButton>
//                                             <StyledLink to="/translator">Translator</StyledLink>
//                                         </StyledButton>
//                                         <StyledButton>
//                                             <StyledLink to="/faq">FAQ</StyledLink>
//                                         </StyledButton>
//                                     </>
//                                 )}
//                                 <StyledButton>
//                                     <StyledLink to="/about">About</StyledLink>
//                                 </StyledButton>
//                                 {isLoggedIn ? (
//                                     <StyledButton onClick={handleLogout}>Logout</StyledButton>
//                                 ) : (
//                                     <StyledButton onClick={handleLogin}>Login</StyledButton>
//                                 )}
//                             </>
//                         )}
//                     </Box>
//                 </Toolbar>
//             </StyledAppBar>
//         </Slide>
//     );
// }

// export default Navbar;
