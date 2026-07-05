import express from 'express';
import connectDb from './config/db.js';
import bookRoutes from './routes/book.routes.js';

const app = express();

await connectDb();

app.use(express.json());
app.use('/api', bookRoutes);

// Simple health endpoint to verify server is running
app.get('/api/starter', (req, res) => {
  res.json({ message: 'Server is running' });
});

export default app;

