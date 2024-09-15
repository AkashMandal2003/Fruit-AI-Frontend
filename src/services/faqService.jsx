import axios from 'axios';

const API_URL = 'http://localhost:8080/faqs';

const getFaqs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createFaq = async (faq) => {
  await axios.post(API_URL, faq);
};

const deleteFaq = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export default { getFaqs, createFaq, deleteFaq };
