import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  minHeight: '100vh',
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '8px',
  boxShadow: '0 0 200px rgba(33, 203, 243, .3)',
  width: '100%',
  maxWidth: '600px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3f51b5',
  color: '#fff',
  marginTop: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#303f9f',
  },
}));

const TranslatorPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');

  const languages = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    zh: 'Chinese',
    hi: 'Hindi',
    bn: 'Bengali',
  };

  const translateText = async () => {
    if (inputText.trim() === '') {
      console.error('Input text is empty');
      return;
    }

    try {
      const apiKey = `${import.meta.env.VITE_TRANSLATOR_API}`;
      const endpoint = `${import.meta.env.VITE_TRANSLATOR_ENDPOINT}`;
      
      const response = await axios.post(
        `${endpoint}&from=${sourceLang}&to=${targetLang}`,
        [{ text: inputText }],
        {
          headers: {
            'Ocp-Apim-Subscription-Key': apiKey,
            'Ocp-Apim-Subscription-Region': 'southeastasia',
            'Content-Type': 'application/json',
          },
        }
      );

      setTranslatedText(response.data[0].translations[0].text);
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText('Error translating text. Please try again.');
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setTranslatedText('');
  };

  return (
    <StyledContainer>
      <FormPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          Translator
        </Typography>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Source Language</InputLabel>
          <Select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            label="Source Language"
          >
            {Object.entries(languages).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StyledButton onClick={handleSwapLanguages}>
          Swap Languages
        </StyledButton>
        <FormControl fullWidth variant="outlined" sx={{ marginTop: 2 }}>
          <InputLabel>Target Language</InputLabel>
          <Select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            label="Target Language"
          >
            {Object.entries(languages).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StyledTextField
          fullWidth
          label="Enter text to translate"
          variant="outlined"
          multiline
          rows={4}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          sx={{ marginTop: 2 }}
        />
        <StyledButton onClick={translateText} variant="contained" fullWidth>
          Translate
        </StyledButton>
        {translatedText && (
          <StyledTextField
            fullWidth
            label="Translated text"
            variant="outlined"
            multiline
            rows={4}
            value={translatedText}
            readOnly
            sx={{ marginTop: 2 }}
          />
        )}
      </FormPaper>
    </StyledContainer>
  );
};

export default TranslatorPage;
