import axios from 'axios';
import { Book, BookReview, Trade, User } from '../types';

const API_URL = 'http://localhost:8080/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User API
export const registerUser = async (user: User): Promise<User> => {
  const response = await api.post('/users', user);
  return response.data;
};

// Book API
export const getAllBooks = async (): Promise<Book[]> => {
  const response = await api.get('/books');
  return response.data;
};

export const addBook = async (book: Book): Promise<Book> => {
  const response = await api.post('/books', book);
  return response.data;
};

export const updateBook = async (id: number, book: Book): Promise<Book> => {
  const response = await api.put(`/books/${id}`, book);
  return response.data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await api.delete(`/books/${id}`);
};

// Book Review API
export const addReview = async (review: BookReview): Promise<BookReview> => {
  const response = await api.post('/reviews', review);
  return response.data;
};

// Trade API
export const requestTrade = async (trade: Trade): Promise<Trade> => {
  const response = await api.post('/trades', trade);
  return response.data;
};

export const confirmTrade = async (id: number): Promise<void> => {
  await api.put(`/trades/${id}/confirm`);
};