import express from 'express';
import { createBook, getBookByTitle, getAvailableBooks } from '../controllers/book.controller.js';

const router = express.Router();

// Q1 create : post /books
router.post('/books', createBook);

// Q3 Available Books Api (must be before /books/:title)
router.get('/books/available', getAvailableBooks);

// Q2 Search Book Api
router.get('/books/:title', getBookByTitle);

export default router;

