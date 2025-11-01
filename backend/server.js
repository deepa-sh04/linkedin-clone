const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'LinkedIn Clone Backend is WORKING!',
    status: 'SUCCESS',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    message: 'Health check OK',
    status: 'healthy'
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Basic server started successfully');
});