
const connectToMongo = require('./db');
const cors = require('cors');
connectToMongo();
const express = require('express');
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})