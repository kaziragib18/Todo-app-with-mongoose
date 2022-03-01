const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');

//create model //Cap size //singular name 
const Todo = new mongoose.model("Todo", todoSchema);

//GET ALL THE TODOS
router.get('/', async (req, res) => {
  await Todo.find({ status: 'active' }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error',
      });
    } else {
      res.status(200).json({
        result: data,
        message: 'Success!',
      });
    }
  })

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
  const result = await Todo.findByIdAndUpdate({ _id: req.params.id }, {
    $set: {
      status: 'active'
    },
  }, {
    new: true,
    useFindAndModify: false,
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
  console.log(result);
})

//DELETE TODO
router.delete('/:id', async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error',
      });
    } else {
      res.status(200).json({
        message: 'Deleted Successfully!',
      });
    }
  })
})

module.exports = router;


let input = { student: 5, teacher: 4, stuff: 3, '6': 6, '9': 8, '7': 1 };

let keys = [];
let values = [];
//first iterate over key,values of the input object
Object.entries(input).forEach(([key, value]) => {
  //check if key and value are diffrent, put them in the related array
  if (key != value) {
    keys.push(key);
    values.push(value);
  }
  else {
    return;
  }
});

console.log('keys:', keys);
console.log('values:', values);