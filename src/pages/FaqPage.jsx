import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton, Paper, Fab, Collapse, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({
    user: localStorage.getItem('auth'), 
    question: '', 
    answer: '', 
    // author: '', 
    category: '' 
  });
  const [formVisible, setFormVisible] = useState(false);
  const [expandedFaqId, setExpandedFaqId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [editingFaq, setEditingFaq] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVICE_URL}/faqs`);
      const fetchedFaqs = response.data;

      if (Array.isArray(fetchedFaqs)) {
        setFaqs(fetchedFaqs);
        const uniqueCategories = [...new Set(fetchedFaqs.map((faq) => faq.category))];
        setCategories(uniqueCategories);
      } else {
        console.error('Fetched FAQs is not an array:', fetchedFaqs);
        setFaqs([]);
      }
    } catch (error) {
      console.error('Failed to fetch FAQs:', error);
      setFaqs([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingFaq) {
        const { _id, ...updatedData } = newFaq;
        const response = await axios.put(`${import.meta.env.VITE_SERVICE_URL}/faqs/${editingFaq._id}`, updatedData);
        if (response) alert('FAQ updated successfully');
      } else {
        const response = await axios.post(`${import.meta.env.VITE_SERVICE_URL}/faqs`, newFaq);
        if (response) alert('FAQ added successfully');
      }
      setNewFaq({ question: '', answer: '', author: '', category: '' });
      setFormVisible(false);
      setEditingFaq(null);
      fetchFaqs();
    } catch (error) {
      console.error('Failed to submit FAQ:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_SERVICE_URL}/faqs/${id}`);
      if (response) {
        alert('FAQ deleted successfully');
        fetchFaqs();
      } else alert('Failed to delete FAQ');
    } catch (error) {
      console.error('Failed to delete FAQ:', error);
    }
  };

  const handleEdit = (faq) => {
    setEditingFaq(faq);
    setNewFaq(faq);
    setFormVisible(true);
  };

  const handleExpandClick = (faqId) => {
    setExpandedFaqId(expandedFaqId === faqId ? null : faqId);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredFaqs = Array.isArray(faqs)
    ? selectedCategory
      ? faqs.filter((faq) => faq.category === selectedCategory)
      : faqs
    : [];

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: 2, sm: 3, md: 4 },
        marginTop: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
        FAQs
      </Typography>

      {!formVisible && (
        <Fab
          aria-label="add"
          onClick={() => {
            setEditingFaq(null);
            setFormVisible(true);
          }}
          sx={{ marginBottom: 4, background: "linear-gradient(45deg, rgba(0, 150, 255, 1) 30%, rgba(0, 255, 255, 1) 70%, rgba(0, 0, 255, 0.7) 100%)" }}
        >
          <AddIcon sx={{ color: 'white' }} />
        </Fab>
      )}

      {formVisible && (
        <Paper elevation={3} sx={{ padding: { xs: 2, sm: 3, md: 4 }, marginBottom: 4 }}>
          <Typography variant="h6" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}>
            {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Question"
              value={newFaq.question}
              onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Answer"
              value={newFaq.answer}
              onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
              sx={{ marginBottom: 2 }}
            />
            {/* <TextField
              fullWidth
              label="Author"
              value={newFaq.author}
              onChange={(e) => setNewFaq({ ...newFaq, author: e.target.value })}
              sx={{ marginBottom: 2 }}
            /> */}
            <TextField
              fullWidth
              label="Related Fruit"
              value={newFaq.category}
              onChange={(e) => setNewFaq({ ...newFaq, category: e.target.value })}
              sx={{ marginBottom: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(45deg, rgba(0, 150, 255, 1) 30%, rgba(0, 255, 255, 1) 70%, rgba(0, 0, 255, 0.7) 100%)',
                color: '#fff',
                '&:hover': {
                  background: 'linear-gradient(45deg, rgba(0, 150, 255, 0.8) 30%, rgba(0, 255, 255, 0.8) 70%, rgba(0, 0, 255, 0.6) 100%)',
                },
              }}
            >
              {editingFaq ? 'Update FAQ' : 'Add FAQ'}
            </Button>
          </form>
          <Button onClick={() => setFormVisible(false)} fullWidth sx={{ marginTop: 2, background: 'red' }}>
            Cancel
          </Button>
        </Paper>
      )}

      {/* Category Chips */}
      <div style={{ marginBottom: 16 }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            onClick={() => handleCategoryClick(category)}
            sx={{ margin: 0.5, background: 'linear-gradient(45deg, rgba(0, 150, 255, 0.2), rgba(0, 255, 255, 0.2))' }}
            color={selectedCategory === category ? 'secondary' : 'default'}
          />
        ))}
        <Chip
          label="All"
          onClick={() => setSelectedCategory('')}
          sx={{ margin: 0.5, background: 'skyblue' }}
          color={selectedCategory === '' ? 'primary' : 'default'}
        />
      </div>

      {/* FAQ List */}
      <List sx={{ width: '100%', maxWidth: 600 }}>
        {filteredFaqs.map((faq) => (
          <ListItem
            key={faq._id}
            divider
            sx={{ cursor: 'pointer', transition: 'all 0.3s ease', marginBottom: 2, background: 'linear-gradient(45deg, rgba(240, 248, 255, 0.2), rgba(173, 216, 230, 0.2))' }}
            onClick={() => handleExpandClick(faq._id)}
          >
            <ListItemText
              primary={faq.question}
              secondary={
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                    <div>
                      <IconButton edge="end" aria-label="edit" onClick={(e) => { e.stopPropagation(); handleEdit(faq); }}>
                        <EditIcon sx={{ color: 'blue' }} />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete" onClick={(e) => { e.stopPropagation(); handleDelete(faq._id); }}>
                        <DeleteIcon sx={{ color: 'red' }} />
                      </IconButton>
                    </div>
                  </div>
                  <Collapse in={expandedFaqId === faq._id} timeout="auto" unmountOnExit>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Collapse>
                </>
              }
            />
            {expandedFaqId === faq._id ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FaqPage;
