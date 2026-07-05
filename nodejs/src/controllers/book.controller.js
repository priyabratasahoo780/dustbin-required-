import Book from '../models/book.model.js';

export const createBook = async (req, res) => {
  try {
    const { title, author, price, available } = req.body;

    const newBook = new Book({
      title,
      author,
      price,
      available: available !== undefined ? available : true,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error('Error creating book:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const book = await Book.findOne({ title });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
  } catch (error) {
    console.error('Error fetching book:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAvailableBooks = async (req, res) => {
  try {
    const availableBooks = await Book.find({ available: true });
    res.json(availableBooks);
  } catch (error) {
    console.error('Error fetching available books:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

