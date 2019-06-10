const express = require('express');
const app = express();
// const postRouter = require('../lib/routes/post');

app.use(express.json());

app.use(require('../lib/middleware/error'));

module.exports = app;
