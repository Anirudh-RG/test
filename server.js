const { configDotenv } = require('dotenv');
const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

const DB_NAME= process.env.DB_NAME || 'defaultdatabase';
app.get('/', (req, res) => {
  res.send(`Database Name: ${DB_NAME}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}
);
