const express = require('express');
const path = require('path');

const app = express();

// serving static images, css files
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Portfolio is running on port 3000');
});
