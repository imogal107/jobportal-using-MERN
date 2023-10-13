// index.js

const express = require('express');
const { connectToDatabase, mongoose } = require('./db.js'); // Import modules using require

const app = express();
const port = 3000; // You can use any port you prefer

// Middleware to ensure the database is connected before handling requests
app.use(async (req, res, next) => {
  if (!mongoose.connection.readyState) {
    try {
      await connectToDatabase();
      next();
    } catch (error) {
      res.status(500).send('Error connecting to the database.');
    }
  } else {
    next();
  }
});

// Define your API routes and other Express.js configurations here
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
