import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import TranslatorPage from './pages/TranslatorPage';
import FAQPage from './pages/FaqPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/translator" element={<TranslatorPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
