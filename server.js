//start at 32:01 https://www.youtube.com/watch?v=KyWaXA_NvT0

const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})


connectDB();

const transactions = require('./routes/transactions.js')

const app = express();

app.use('/api/v1/transactions', transactions)
// app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000 

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))