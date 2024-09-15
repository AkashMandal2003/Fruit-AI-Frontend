import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const HomePageContainer = styled('div')({
  padding: '20px',
  textAlign: 'center',
  minHeight: 'calc(100vh-64px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '80px'
});

const CardsContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  width: '100%',
  justifyItems: 'center',
  marginTop: '50px'
}));

const StyledCard = styled(Card)({
  width: '100%',
  maxWidth: '300px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: '0 0 100px rgba(33, 203, 243, .3)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#3f51b5',
  color: '#fff',
  marginTop: '10px',
  '&:hover': {
    backgroundColor: '#1e88e5',
  },
  borderRadius: '20px'
});

const HomePage = () => {
  const cardsData = [
    {
      title: 'Chatbot',
      link: '/chatbot',
      image: '/assets/chat.jpg', 
    },
    {
      title: 'Translator',
      link: '/translator',
      image: '/assets/translate.jpg',
    },
    {
      title: 'FAQ',
      link: '/faq',
      image: '/assets/faqs.jpg',
    },
    {
      title: 'About',
      link: '/about',
      image: '/assets/about.jpg',
    },
  ];

  return (
    <HomePageContainer>
      <Typography variant="h4" gutterBottom>
        Welcome to Fruit.ai
      </Typography>
      <CardsContainer>
        {cardsData.map((card, index) => (
          <StyledCard key={index}>
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <StyledButton component={Link} to={card.link}>
                Explore {card.title}
              </StyledButton>
            </CardContent>
          </StyledCard>
        ))}
      </CardsContainer>
    </HomePageContainer>
  );
};

export default HomePage;
