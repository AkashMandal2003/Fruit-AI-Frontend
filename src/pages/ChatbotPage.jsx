import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from '../services/ActionProvider';
import MessageParser from '../services/MessageParser';
import config from '../services/config';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: '64px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ChatbotWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  borderRadius: '16px',
  boxShadow: '0 0 200px rgba(33, 203, 243, .3)',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ChatbotPage = () => {
  return (
    <StyledContainer maxWidth="lg">
      <ChatbotWrapper>
        <Typography variant="h4" gutterBottom>
          Fruit Chatbot
        </Typography>
        <Chatbot 
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </ChatbotWrapper>
    </StyledContainer>
  );
};

export default ChatbotPage;
