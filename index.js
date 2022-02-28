const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler')

//express app initials
const app = express();
app.use(express.json());

//database connection with mongoose
mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connection successful'))
  .catch(err => console.log(err))

//application routes
app.use('/todo', todoHandler)


//default error handler
function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });

}

app.listen(3000, () => {
  console.log('App is listening at port 3000');
}) 