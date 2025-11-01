const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ 
    message: 'LinkedIn Clone Backend is running!',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});


app.get('/health', (req, res) => {
  res.json({ 
    message: 'Server is healthy',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});