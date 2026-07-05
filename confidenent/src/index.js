require('dotenv').config();       // Must be the very first line

const app = require('./app');
const connectDB = require('./config/db');
const app = require('./app');

const PORT = process.env.PORT || 5000;

connectDB(); 

app.listen(PORT, () => {
  console.log(`serving on port ${PORT}`);
});