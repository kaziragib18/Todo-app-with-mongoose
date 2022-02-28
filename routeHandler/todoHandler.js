const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');

//create model //Cap size //singular name 
const Todo = new mongoose.model("Todo", todoSchema);

//GET ALL THE TODOS
router.get('/', async (req, res) => {

})
//GET one THE TODO by id
router.get('/:id', async (req, res) => {

})
//POST A TODO
router.post('/', async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error',
      });
    } else {
      res.status(200).json({
        message: 'Todo was inserted successfully!',
      });
    }
  });
})
//POST MULTIPLE TODO
router.post('/all', async (req, res) => {
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error',
      });
    } else {
      res.status(200).json({
        message: 'Todo were inserted successfully!',
      });
    }
  })

})
//UPDATE TODO
router.put('/:id', async (req, res) => {
  await Todo.updateOne({ _id: req.params.id }, {
    $set: {
      status: 'active'
    }
  }, (err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error',
      });
    } else {
      res.status(200).json({
        message: 'Todo was updated successfully!',
      });
    }
  })
})
//DELETE TODO
router.delete('/:id', async (req, res) => {

})

module.exports = router;