import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
//   background: 'linear-gradient(to right, #e3f2fd, #bbdefb)',
  marginTop: '200px'
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: 'auto',
  maxWidth: '800px',
  boxShadow: '0 0 200px rgba(33, 203, 243, .3)',
  borderRadius: '8px',
}));

const AboutPage = () => {
  return (
    <StyledContainer maxWidth="lg">
      <StyledPaper>
        <Typography variant="h4" gutterBottom>
          About Fruit.ai
        </Typography>
        <Typography variant="body1" paragraph>
          Fruit.ai is a health manager application designed to provide users with
          essential information about fruits, a chatbot for fruit queries, a translator
          for translating fruit names into regional languages, and a FAQ section where
          users can find answers to commonly asked questions.
        </Typography>
      </StyledPaper>
    </StyledContainer>
  );
};

export default AboutPage;
