const express = require('express');
const app = express();
const devopsRouter = require('./routes/devops');

app.use(express.json());
app.use('/DevOps', devopsRouter);

module.exports = app;
