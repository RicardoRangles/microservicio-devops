// index.js
const express = require('express');
const app = express();

app.use(express.json());
app.use('/DevOps', require('./routes/devops'));

module.exports = app;
