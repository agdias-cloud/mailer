const express = require('express');
const dotenv = require('dotenv').config();
const  orders = require('./src/routes/orders');
const app = express();

const port = process.env.PORT | 3000;
app.use(express.json());
app.use('/api/v1/orders', orders);

app.listen(port, () => console.log(`Server running on port ${port}`));
