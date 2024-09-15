import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { AuthContext } from '../components/AuthContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '40px',
  maxWidth: '400px',
//   margin: '50px auto',
  marginTop: '50px',
  textAlign: 'center',
  animation: `${fadeIn} 0.6s ease-out`,
  boxShadow: '0 0 50px rgba(33, 203, 243, .3)',
  borderRadius: theme.shape.borderRadius,
}));


const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  padding: '10px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));


const GradientBox = styled(Box)(({ theme }) => ({
  boxShadow: '5px 3px rgba(33, 203, 243, .3)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === 'password') {
      login(1);
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <GradientBox>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Login
          </StyledButton>
        </form>
      </StyledPaper>
    </GradientBox>
  );
}

export default LoginPage;
