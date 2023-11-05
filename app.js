const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  
  // Export the app and server (added for testing)
module.exports = { app, server };